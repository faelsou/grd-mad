<<<<<<< HEAD
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
=======
# ---------- Builder (Node) ----------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# se usar Vite: certifique-se que em package.json tenha "build": "vite build"
RUN npm run build

# ---------- Runtime (Nginx) ----------
FROM nginx:alpine
# Config de SPA (fallback)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia SOMENTE o build
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# (opcional) saúde básica
HEALTHCHECK CMD wget -qO- http://127.0.0.1 || exit 1
>>>>>>> be1795b (Ajuste pipeline5)
