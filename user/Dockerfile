# Set the base image
FROM node:10.16.3
# Create app directory
WORKDIR /usr/src/app
# Copy package.json AND package-lock.json
COPY package*.json ./
# Install all dependencies
RUN npm ci 

RUN ls
# Copy the rest of the code
COPY www/ .

# Expose the port 
EXPOSE 8080
# Define the command that should be executed
CMD [ "node", "server.js" ]