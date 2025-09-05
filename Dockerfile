### ---------- Build ----------
##FROM node:20-alpine AS build
##WORKDIR /app
##COPY package*.json ./
##RUN npm ci --include=dev
##COPY . .
##RUN npm run build  # gera /app/dist
##
### ---------- Runtime ----------
##FROM nginx:1.29-alpine
##RUN rm -rf /usr/share/nginx/html/*
##COPY --from=build /app/dist/ /usr/share/nginx/html/
##
### SPA + bloqueio de rotas de dev
##RUN printf 'server {\n\
##  listen 80;\n\
##  server_name _;\n\
##  root /usr/share/nginx/html;\n\
##  index index.html;\n\
##  location ~ ^/(src|node_modules|@vite)/ { return 404; }\n\
##  location = /vite.svg { return 404; }\n\
##  location / { try_files $uri $uri/ /index.html; }\n\
##  location /assets/ { expires 1y; add_header Cache-Control "public, immutable"; }\n\
##}\n' > /etc/nginx/conf.d/default.conf
##
##EXPOSE 80
##CMD ["nginx","-g","daemon off;"]


# ---------- Build ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
ARG VITE_COMMIT_SHA=local
ENV VITE_COMMIT_SHA=$VITE_COMMIT_SHA
RUN npm run build && \
    echo "${VITE_COMMIT_SHA}-$(date -u +%Y%m%d%H%M%S)" > dist/version.txt

# ---------- Runtime ----------
FROM nginx:1.29-alpine

# Limpa conteúdo padrão e copia o build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Escreve a default.conf diretamente
RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location /assets/ {\n\
    try_files $uri =404;\n\
    access_log off;\n\
    add_header Cache-Control "public, max-age=31536000, immutable" always;\n\
    expires 365d;\n\
  }\n\
  location = /index.html {\n\
    try_files $uri =404;\n\
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;\n\
    expires -1;\n\
  }\n\
  location / {\n\
    try_files $uri /index.html;\n\
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;\n\
  }\n\
  location ~ ^/(src|node_modules|@vite)/ { return 404; }\n\
  location = /vite.svg { return 404; }\n\
  location ~* /(wp-login\\.php|xmlrpc\\.php|wlwmanifest\\.xml|wp-includes/|wp-admin/) { return 404; }\n\
  include /etc/nginx/mime.types;\n\
  default_type application/octet-stream;\n\
  gzip on;\n\
  gzip_min_length 1024;\n\
  gzip_types text/plain text/css application/javascript application/json application/xml image/svg+xml;\n\
}\n' > /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
