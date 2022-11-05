
FROM --platform=linux/amd64 267973720966.dkr.ecr.eu-west-3.amazonaws.com/pdp-middle:node-14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=1536"

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]
