# Instructions to build and run

Open command prompt at online-store-node folder level

****************************************************************************
Install NodeJS and Typescript dependencies

npm install

****************************************************************************

Run REST API service

node src\index.js

****************************************************************************

Run tests

npm run test

****************************************************************************
Postman

Base URL: http://localhost:5000/v1

****************************************************************************

Swagger/OpenAPI Documentation

http://localhost:5000/v1/swagger/

****************************************************************************

Run as Docker container

docker build -t online-store-node:latest .

docker run -d -p 5000:5000 online-store-node
