# Build stage
FROM node:20-slim AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build Storybook
RUN pnpm build-storybook

# Production stage - serve static files
FROM node:20-slim

# Install http-server globally
RUN npm install -g http-server

WORKDIR /app

# Copy built Storybook from builder
COPY --from=builder /app/storybook-static ./storybook-static

# Set default PORT
ENV PORT=3000

# Start http-server - uses PORT env var
CMD ["sh", "-c", "http-server storybook-static -p $PORT"]
