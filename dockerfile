# Stage 1: Build the Node.js application
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Rebuild sqlite3 to match the container's architecture
RUN npm rebuild sqlite3

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run database migrations using Knex
RUN npx knex migrate:latest --knexfile ./config/knexfile.js

# Command to start the application
CMD [ "npm", "start" ]
