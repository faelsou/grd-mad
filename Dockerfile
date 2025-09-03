# ---------- Build ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
RUN npm run build  # gera /app/dist

# ---------- Runtime ----------
FROM nginx:1.29-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

# SPA + bloqueio de rotas de dev
RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location ~ ^/(src|node_modules|@vite)/ { return 404; }\n\
  location = /vite.svg { return 404; }\n\
  location / { try_files $uri $uri/ /index.html; }\n\
  location /assets/ { expires 1y; add_header Cache-Control "public, immutable"; }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
