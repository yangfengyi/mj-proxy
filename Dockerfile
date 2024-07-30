FROM node:14

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm config set registry http://r.cnpmjs.org/
RUN npm install --freeze

EXPOSE 7000

CMD ["npm", "start"]
