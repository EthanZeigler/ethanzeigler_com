# Use an official Node runtime as a parent image
FROM node:20-alpine AS setup

# Set the working directory in the container
WORKDIR /app

# Copy lockfiles
COPY package.json .yarnrc.yml ./
COPY .yarn/ .yarn/

CMD [ "/bin/bash" ]

RUN yarn install


#########################################
FROM setup AS dev-mount
# assumes volume is bound

ENTRYPOINT [ "yarn", "run", "dev", "--host", "0.0.0.0", "--port", "3000" ]

#########################################
FROM setup AS builder
COPY ./ ./


#########################################
FROM builder AS prod

RUN yarn build

#########################################
FROM nginx:alpine as deploy

COPY --from=prod /app/dist /usr/share/nginx/html