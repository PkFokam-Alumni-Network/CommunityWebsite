# Stage 1: Build the React app
FROM node:20 as build
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./
RUN npm install

# Copy the entire project and build the React app
COPY . .
RUN npm run build --loglevel verbose

# Expose the port the app runs on
EXPOSE 4000

# Install a simple HTTP server to serve the built app
RUN npm install -g serve

# Set the command to serve the React app
CMD ["serve", "-s", "build", "-l", "4000"]

