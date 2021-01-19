FROM strapi/base

WORKDIR .

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

ENV PORT 80

CMD ["yarn", "start"]
