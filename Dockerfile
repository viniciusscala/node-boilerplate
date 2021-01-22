FROM node:14.15

# Create app directory
USER node
WORKDIR /home/node/

# Install dependencies
COPY package.json .
RUN yarn install

# Bundle app source
COPY . .

# Exports
EXPOSE 3001
CMD [ "yarn", "start ]