# Étape 1 : Build de l'application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Étape 2 : Serveur final (Nginx léger)
FROM nginx:stable-alpine
# On copie le build vers le dossier que Nginx sert par défaut
COPY --from=build /app/build /usr/share/nginx/html
# On ajoute une config minimaliste pour gérer le Single Page Application (React Router)
RUN echo "server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files \$uri \$uri/ /index.html; } }" > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]