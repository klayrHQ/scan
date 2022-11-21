FROM node:16.16.0-alpine as production

WORKDIR /app
EXPOSE 80
COPY . .
RUN yarn install
RUN yarn build-storybook

FROM nginx

COPY --from=production /app/storybook-static /usr/share/nginx/html

