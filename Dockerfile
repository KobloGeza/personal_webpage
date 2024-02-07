# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY ../public .
COPY ../src  .
#COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]