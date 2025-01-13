# Stage 1: Build the React app
FROM node:16 as build
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./
RUN npm install

# Copy the entire project and build the React app
COPY . .
RUN npm run build --loglevel verbose

# Default command to run nginx
CMD ["npm", "start"]
