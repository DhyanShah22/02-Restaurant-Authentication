FROM node:21

WORKDIR /app

COPY . .

RUN npm i --verbose

EXPOSE 3000

CMD ["npm", "start", "--", "--host"]
