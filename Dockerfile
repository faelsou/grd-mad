# Build and run the Vite React application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
# Install only production dependencies if there were any
RUN npm ci --omit=dev
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "--port", "4173"]
