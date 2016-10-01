FROM node:argon

# Create app directory
RUN mkdir -p /home/xavi/Projects/docker/gridProject/
WORKDIR /home/xavi/Projects/docker/gridProject/

# Install app dependencies
COPY package.json /home/xavi/Projects/docker/gridProject/
RUN npm install

# Bundle app source
COPY . /home/xavi/Projects/docker/gridProject/

EXPOSE 8080
CMD [ "npm", "start" ]
