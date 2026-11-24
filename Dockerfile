FROM node:18-alpine

WORKDIR /app

COPY server.js .
COPY login.html .
COPY register.html .
COPY README.md .

EXPOSE 3000

CMD ["node", "server.js"]
