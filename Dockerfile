FROM node
WORKDIR /app
COPY . .
CMD NODE_URLS=http://*:$PORT npm run start:prod