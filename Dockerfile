FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/index.js"]
