# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app/backend

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files to the working directory
COPY . .

# Expose the port on which the Node.js server will run
EXPOSE 8080

# Command to run the Node.js server
CMD ["npm", "start"]
