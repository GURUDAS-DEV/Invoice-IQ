FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend
COPY frontend/ ./
RUN npm ci
RUN npm run build

FROM node:20-alpine AS backend-builder

WORKDIR /app/backend
COPY backend/ ./
RUN npm ci
RUN npm run build

FROM node:20-alpine AS runtime

ENV NODE_ENV=production
ENV PORT=3000
ENV FRONTEND_DIR=/app/frontend
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY backend/package*.json /app/backend/
RUN cd /app/backend; npm ci --omit=dev

COPY --from=backend-builder /app/backend/dist /app/backend/dist
COPY --from=frontend-builder /app/frontend /app/frontend

RUN mkdir -p /app/.next && chmod -R 777 /app

EXPOSE 3000

CMD ["node", "/app/backend/dist/src/server.js"]
