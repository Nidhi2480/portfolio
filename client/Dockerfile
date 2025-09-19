# Stage 1: Build the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React app using a simple HTTP server (e.g., serve or nginx)
FROM nginx:alpine

# Copy the build folder from the first stage to the Nginx server's root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
