FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=liskscan --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk add git
RUN apk update
WORKDIR /app

ARG NEXT_PUBLIC_SERVICE_URL
ENV NEXT_PUBLIC_SERVICE_URL ${NEXT_PUBLIC_SERVICE_URL}

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .
#COPY turbo.json turbo.json
RUN yarn turbo run build --filter=liskscan...

FROM node:alpine AS runner
WORKDIR /app

ARG NEXT_PUBLIC_SERVICE_URL
ENV NEXT_PUBLIC_SERVICE_URL ${NEXT_PUBLIC_SERVICE_URL}

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/assets ./apps/web/assets
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
EXPOSE 8080

CMD node apps/web/server.js
