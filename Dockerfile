FROM node:alpine3.12

LABEL maintainer="Fabian Brash"

RUN mkdir /opt/react-cors

WORKDIR /opt/react-cors

COPY package*.json ./

RUN npm install

## I probably need to chown the above directory

COPY . .

## DO the below in production
# RUN npm run build

USER 1000

EXPOSE 3000

CMD ["npm", "start"]