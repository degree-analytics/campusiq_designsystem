#!/bin/bash
# CampusIQ Storybook with Story UI Live Deployment
# This script starts both Storybook dev server and Story UI MCP server

set -e

# Configuration
STORYBOOK_PORT=6006
MCP_PORT=${PORT:-4001}

echo "🚀 Starting CampusIQ Storybook with Story UI..."
echo "📊 Storybook internal port: $STORYBOOK_PORT"
echo "🌐 MCP server public port: $MCP_PORT"

# Start Storybook dev server in the background
echo "📦 Starting Storybook dev server..."
pnpm storybook --port "$STORYBOOK_PORT" --host 0.0.0.0 --ci --no-open &
STORYBOOK_PID=$!

# Wait for Storybook to be ready
echo "⏳ Waiting for Storybook to be ready..."
MAX_WAIT=120
WAIT_COUNT=0
while ! wget -q --spider "http://localhost:$STORYBOOK_PORT" 2>/dev/null; do
    sleep 2
    WAIT_COUNT=$((WAIT_COUNT + 2))
    if [ $WAIT_COUNT -ge $MAX_WAIT ]; then
        echo "❌ Storybook failed to start within ${MAX_WAIT}s"
        kill $STORYBOOK_PID 2>/dev/null || true
        exit 1
    fi
    echo "   Still waiting... (${WAIT_COUNT}s/${MAX_WAIT}s)"
done
echo "✅ Storybook is ready!"

# Set environment variables to enable Storybook proxy in Story UI MCP server
export STORYBOOK_PROXY_PORT=$STORYBOOK_PORT
export STORYBOOK_PROXY_ENABLED=true

# Start Story UI MCP server (handles API routes and proxies to Storybook)
echo "🎨 Starting Story UI MCP server on port $MCP_PORT..."

# Find the story-ui MCP server - check multiple possible locations
if [ -f "./node_modules/story-ui/dist/mcp-server/index.js" ]; then
    MCP_SERVER_PATH="./node_modules/story-ui/dist/mcp-server/index.js"
elif [ -f "./node_modules/story-ui/mcp-server/index.js" ]; then
    MCP_SERVER_PATH="./node_modules/story-ui/mcp-server/index.js"
else
    echo "❌ Could not find Story UI MCP server"
    kill $STORYBOOK_PID 2>/dev/null || true
    exit 1
fi

echo "📍 Using MCP server at: $MCP_SERVER_PATH"

# Run the MCP server with the configured port
PORT=$MCP_PORT node "$MCP_SERVER_PATH" &
MCP_PID=$!

echo "✅ Story UI MCP server started!"
echo ""
echo "🎉 CampusIQ Storybook with Story UI is now running!"
echo "   - Storybook: http://localhost:$STORYBOOK_PORT (internal)"
echo "   - Story UI API: http://localhost:$MCP_PORT/story-ui/providers"
echo "   - Public URL: http://localhost:$MCP_PORT"
echo ""

# Handle shutdown gracefully
cleanup() {
    echo "🛑 Shutting down..."
    kill $STORYBOOK_PID 2>/dev/null || true
    kill $MCP_PID 2>/dev/null || true
    exit 0
}

trap cleanup SIGTERM SIGINT

# Wait for either process to exit
wait -n $STORYBOOK_PID $MCP_PID
EXIT_CODE=$?

# If one process exits, kill the other
cleanup
exit $EXIT_CODE
