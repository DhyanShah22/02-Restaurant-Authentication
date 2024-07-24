FROM node:21

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "start", "--", "--host"]
