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
    # Check if Storybook process is still running
    if ! kill -0 $STORYBOOK_PID 2>/dev/null; then
        echo "❌ Storybook process exited unexpectedly"
        exit 1
    fi

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

# The MCP server is from @tpitre/story-ui npm package
MCP_SERVER_PATH="./node_modules/@tpitre/story-ui/dist/mcp-server/index.js"

if [ ! -f "$MCP_SERVER_PATH" ]; then
    echo "❌ Could not find Story UI MCP server at: $MCP_SERVER_PATH"
    echo "   Contents of node_modules/@tpitre/story-ui/dist:"
    ls -la ./node_modules/@tpitre/story-ui/dist/ 2>/dev/null || echo "   Directory not found"
    kill $STORYBOOK_PID 2>/dev/null || true
    exit 1
fi

echo "📍 Using MCP server at: $MCP_SERVER_PATH"

# Run the MCP server with the configured port
PORT=$MCP_PORT node "$MCP_SERVER_PATH" &
MCP_PID=$!

# Wait a moment for the MCP server to start
sleep 3

# Check if MCP server is responding
if ! wget -q --spider "http://localhost:$MCP_PORT/story-ui/providers" 2>/dev/null; then
    echo "⚠️  MCP server may still be starting..."
fi

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅ CampusIQ Storybook with Story UI is now running!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "   📖 Storybook (internal): http://localhost:$STORYBOOK_PORT"
echo "   🤖 MCP Server (public):  http://localhost:$MCP_PORT"
echo ""
echo "   API Endpoints:"
echo "   - /story-ui/providers    - List available LLM providers"
echo "   - /story-ui/generate     - Generate stories"
echo "   - /mcp-remote/mcp        - Claude Desktop MCP endpoint"
echo ""
echo "   Storybook UI is proxied through the MCP server."
echo "   Visit the public URL to access Storybook with Story UI."
echo ""
echo "═══════════════════════════════════════════════════════════"

# Handle shutdown gracefully
cleanup() {
    echo ""
    echo "🛑 Shutting down..."
    kill $STORYBOOK_PID 2>/dev/null || true
    kill $MCP_PID 2>/dev/null || true
    exit 0
}

trap cleanup SIGTERM SIGINT

# Wait for either process to exit
wait $STORYBOOK_PID $MCP_PID
