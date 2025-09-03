<<<<<<< HEAD
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
=======
# -------------------------------
# Build stage
>>>>>>> 8bcdde0 (Ajuste pipeline6)
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install all deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build
RUN npm run build

# -------------------------------
# Production stage
FROM nginx:alpine

# Copy build from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

<<<<<<< HEAD
# (opcional) saúde básica
HEALTHCHECK CMD wget -qO- http://127.0.0.1 || exit 1
>>>>>>> be1795b (Ajuste pipeline5)
=======
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 8bcdde0 (Ajuste pipeline6)
