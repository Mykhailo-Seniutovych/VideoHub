FROM node:12.18-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 5000
# TODO: do not use npm run start in production
CMD npm run start
