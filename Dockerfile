
FROM public.ecr.aws/docker/library/node:14

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

CMD ["npx", "serve", "build"]
