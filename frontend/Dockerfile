FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts -g 
COPY . ./
EXPOSE 3000