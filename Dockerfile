# ---------- Build ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
# Se seu script de produção for outro, ajuste:
RUN npm run build

# ---------- Runtime ----------
FROM nginx:1.29-alpine
# Limpa página default e copia o build do Vite
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Configuração simples p/ SPA (fallback para index.html nas rotas)
RUN printf 'server {\n\
    listen 80;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
      try_files $uri $uri/ /index.html;\n\
    }\n\
    location /assets/ {\n\
      expires 1y;\n\
      add_header Cache-Control "public, immutable";\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
