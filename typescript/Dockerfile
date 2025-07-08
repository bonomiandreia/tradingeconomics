FROM node:lts as builder

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production=false
COPY . .

COPY /_docker/.env .env
RUN cat .env

RUN yarn build

RUN cat .env

FROM node:lts-alpine

WORKDIR /src

COPY --from=builder /src/package.json /src/yarn.lock /src/.env ./


RUN cat .env

RUN NODE_ENV=production yarn install --pure-lockfile --non-interactive --production=true
COPY --from=builder /src/.output ./.output

ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["node", "./.output/server/index.mjs"]
