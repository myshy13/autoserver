# Use an official Node.js image as the base image
FROM node:18

# Set the working directory in the container to the root directory
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY . .

# Command to start the Node.js application
CMD ["node", "index.js", "-c"]