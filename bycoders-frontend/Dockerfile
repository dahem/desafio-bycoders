# Stage 1
FROM node:14 as build-stage

WORKDIR /bycoders-frontend
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$CLIENT_URL

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /bycoders-frontend/build /usr/share/nginx/html
EXPOSE $FRONTEND_PORT

CMD nginx -g 'daemon off;'