FROM node:21

WORKDIR /app

COPY . .

RUN npm install --verbose

EXPOSE 3000

CMD ["npm", "start", "--", "--host"]
