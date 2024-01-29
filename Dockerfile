FROM node:18-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS build
WORKDIR /app
COPY --from=development /app/node_modules ./node_modules
COPY . .
RUN npm run build -ws
ENV NODE_ENV production
RUN npm ci --only=production --ignore-scripts && npm cache clean --force
ENTRYPOINT ["npm", "run", "start:prod", "-w"]
