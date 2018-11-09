FROM node:11.1.0-alpine


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install -- production

# Bundle app source
#COPY . .
RUN npm run build

CMD [ "npm", "start" ]
