FROM node:18-alpine AS builder

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Build the app
COPY . .
RUN npm run build

# Final image
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

