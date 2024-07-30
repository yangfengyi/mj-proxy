FROM node:18.16.0-alpine3.17 as production-stage

WORKDIR /app
COPY ./service .
RUN npm config set registry http://r.cnpmjs.org/
RUN npm install -g pnpm pm2
RUN pnpm install
RUN pnpm start

EXPOSE 7000
CMD [ "npm", "run", "start" ]