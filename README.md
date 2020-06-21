# Lab 02

# API Server

### Author: Paul Depew

- [submission PR](https://github.com/PaulDepew/api-server)
- [swagger.io](https://app.swaggerhub.com/apis/PaulDepew/Live-Server_test/0.1)
- [Heroku Deployment](https://lab10-api-server-test.herokuapp.com/)

### Setup

Clone the Git repository
Install Dependencies
Run npm start
Go to an API request interface like Swagger.io or Postman
Enter the localhost port address
Send methods to the designated routes
  - categories
  - products

#### `.env` requirements

set PORT = 3000
set MONGO_ATLAS_URI = YOUR_MONGO_ATLAS_URI

#### Running the app

npm start
  - Starts the server on your local host with the port you defined in you .env


#### Tests

npm test 
  - runs a jest testing suite to test our DB connections, CRUD functions and middleware


#### UML

![UML Diagram](https://atlas.mindmup.com/courtofavalon/a_request_is_sent_to_our_server/index.html)
