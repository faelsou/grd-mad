# ---------- Build ----------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- Runtime ----------
FROM nginx:alpine
# SPA e cache
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# Só o build!
COPY --from=builder /app/dist/ /usr/share/nginx/html/
HEALTHCHECK CMD wget -qO- http://localhost/ || exit 1
