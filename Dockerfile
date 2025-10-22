# Usar a imagem base do Node.js [cite: 421]
FROM node:18-alpine

# Definir o diretório de trabalho [cite: 422]
WORKDIR /app

# Copiar os ficheiros de dependências [cite: 423]
COPY package*.json ./

# Instalar as dependências [cite: 424]
RUN npm install

# Copiar o resto do código [cite: 425]
COPY . .

# Expor a porta 8080 (que o server.js usa)
EXPOSE 8080

# Comando para iniciar a app [cite: 426]
CMD [ "node", "server.js" ]