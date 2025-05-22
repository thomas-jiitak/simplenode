# Use official Node.js LTS base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port (make sure this matches your app)
EXPOSE 80

# Run the app
CMD ["node", "app.js"]