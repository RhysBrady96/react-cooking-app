FROM node:8.12.0


WORKDIR /app

WORKDIR /app

COPY . ./

# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# COPY package.json /usr/src/app/package.json

RUN npm install

CMD ["npm", "run", "dev"]