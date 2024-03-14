# Establecer la imagen base
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de definición de dependencias primero para aprovechar la cache de Docker
COPY package*.json ./
COPY yarn.lock ./

# Instalar las dependencias
RUN yarn install

# Copiar los archivos restantes del proyecto al directorio de trabajo en el contenedor
COPY . .

# Construir la aplicación Next.js
RUN yarn build

# Exponer el puerto que Next.js utiliza por defecto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]
