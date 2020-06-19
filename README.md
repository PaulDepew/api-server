# Lab 02

# API Server

### Author: Paul Depew

- [submission PR](https://github.com/PaulDepew/api-server)
- [swagger.io](https://app.swaggerhub.com/apis/PaulDepew/Live-Server_test/0.1)


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

PORT = 3000
MONGO_ATLAS_URI = YOUR_MONGO_ATLAS_URI

#### Running the app

npm start
  - runs `live-server db.json --routes routes.json`


#### Tests

npm test 
  - runs a jest testing suite to test our DB connections and CRUD functions


#### UML

![UML Diagram](https://atlas.mindmup.com/courtofavalon/a_request_comes_into_our_port_and_is_sen/thumb.png)
