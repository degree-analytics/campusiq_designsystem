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

RUN npm install -g serve

WORKDIR /app

# Copy built Storybook from builder
COPY --from=builder /app/storybook-static ./storybook-static

# Expose port (Railway will set PORT env var)
EXPOSE ${PORT:-3000}

# Start serve - use shell form to expand PORT env var
CMD serve storybook-static -l ${PORT:-3000}
