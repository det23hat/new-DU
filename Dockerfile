FROM node:16.6-alpine AS builder
WORKDIR /src
COPY ./package.json .
RUN npm install
FROM node:16.6-alpine
EXPOSE 3000
WORKDIR /app
COPY --from=builder /src/node_modules/ /app/node_modules/
COPY . .
CMD npm start