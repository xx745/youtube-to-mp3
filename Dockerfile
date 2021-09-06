FROM alpine:latest
WORKDIR /usr/src/app

RUN apk update
RUN apk add yarn

COPY . .
RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]


