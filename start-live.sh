#!/bin/bash

# Story UI Live Production Start Script
# Runs Storybook in dev mode + MCP server with Storybook proxy

echo "🚀 Starting Story UI Live Environment..."
echo ""

# Configuration
STORYBOOK_PORT=6006
MCP_PORT=${PORT:-4001}

# Start Storybook dev server in background
echo "📖 Starting Storybook dev server on internal port ${STORYBOOK_PORT}..."
pnpm storybook --port "$STORYBOOK_PORT" --host 0.0.0.0 --ci --no-open &
STORYBOOK_PID=$!

# Wait for Storybook to initialize
echo "⏳ Waiting for Storybook to start..."
sleep 15

# Verify Storybook is running
if ! kill -0 $STORYBOOK_PID 2>/dev/null; then
    echo "❌ Storybook failed to start"
    exit 1
fi

echo "✅ Storybook dev server running on port ${STORYBOOK_PORT}"

# Set environment variables for Storybook proxy
export STORYBOOK_PROXY_PORT=$STORYBOOK_PORT
export STORYBOOK_PROXY_ENABLED=true

# Start MCP server (uses @tpitre/story-ui from node_modules)
echo "🤖 Starting MCP server on port ${MCP_PORT}..."
npx story-ui start --port "$MCP_PORT" &
MCP_PID=$!

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅ Story UI Live Environment is running!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "   📖 Storybook (internal): http://localhost:${STORYBOOK_PORT}"
echo "   🤖 MCP Server (public):  http://localhost:${MCP_PORT}"
echo ""
echo "   API Endpoints:"
echo "   - /story-ui/providers    - List available LLM providers"
echo "   - /story-ui/generate     - Generate stories"
echo "   - /mcp-remote/mcp        - Claude Desktop MCP endpoint"
echo ""
echo "   Storybook UI is proxied through the MCP server."
echo "   Visit the public URL to access Storybook with Story UI panel."
echo ""
echo "═══════════════════════════════════════════════════════════"

# Handle shutdown gracefully
cleanup() {
    echo ""
    echo "🛑 Shutting down..."
    kill $STORYBOOK_PID 2>/dev/null
    kill $MCP_PID 2>/dev/null
    exit 0
}

trap cleanup SIGTERM SIGINT

# Wait for either process to exit
wait $STORYBOOK_PID $MCP_PID
