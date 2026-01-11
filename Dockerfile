# CampusIQ Storybook with Story UI Live Deployment
# Runs Storybook in DEV MODE with Story UI MCP server for dynamic story generation
#
# Architecture:
# - Storybook dev server (internal port 6006) for hot-reloading
# - Story UI MCP server (Railway PORT) serves API + proxies Storybook
#
# This enables AI-powered story generation in production!

FROM node:20-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all project files
COPY . .

# Make start script executable
RUN chmod +x ./start-live.sh

# Set memory limit for handling large story generation
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Railway sets PORT env var - this is the public port
# Storybook runs internally on 6006
EXPOSE ${PORT:-4001}

# Health check - verify MCP server is responding
# Use shell form for runtime $PORT expansion (Railway sets PORT dynamically)
HEALTHCHECK --interval=30s --timeout=10s --start-period=180s --retries=5 \
  CMD /bin/sh -c 'wget --no-verbose --tries=1 --spider http://localhost:${PORT:-4001}/story-ui/providers || exit 1'

# Start both servers
CMD ["./start-live.sh"]
