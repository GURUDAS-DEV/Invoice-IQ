FROM node:20-alpine AS backend-builder

WORKDIR /app/backend
COPY backend/ ./
RUN npm ci
RUN npm run build

FROM node:20-alpine AS runtime

ENV NODE_ENV=production
ENV PORT=9000

WORKDIR /app

COPY backend/package*.json /app/backend/
RUN cd /app/backend; npm ci --omit=dev

COPY --from=backend-builder /app/backend/dist /app/backend/dist
RUN chmod -R 777 /app/backend

EXPOSE 9000

CMD ["node", "/app/backend/dist/index.js"]
