FROM node:14-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

ARG REACT_APP_API_BASE_URL
ARG REACT_APP_GOOGLE_PLACES_KEY
ARG REACT_APP_API_PORT
ARG REACT_APP_API_GATEWAY_INVOKE_URL
ARG REACT_APP_COGNITO_USER_POOL_ID
ARG REACT_APP_COGNITO_APP_CLIENT_ID
ARG REACT_APP_COGNITO_IDENTITY_POOL_ID
ARG REACT_APP_APP_INSTANCE_ARN
ARG REACT_APP_REGION
ARG REACT_APP_ATTACHMENTS_S3_BUCKET_NAME
ARG REACT_APP_API_CHIME_URL

RUN DISABLE_ESLINT_PLUGIN=true yarn build

FROM nginx:stable-alpine

RUN apk update && apk add --no-cache wget
RUN wget https://github.com/Droplr/aws-env/raw/master/bin/aws-env-linux-amd64 -O /bin/aws-env && chmod +x /bin/aws-env

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
