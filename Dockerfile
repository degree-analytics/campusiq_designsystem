# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build Storybook
RUN pnpm build-storybook

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built Storybook and server
COPY --from=builder /app/storybook-static ./storybook-static
COPY --from=builder /app/server.js ./server.js

# Start the server
CMD ["node", "server.js"]
