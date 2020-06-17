'user strict';


const server = require('./lib/server.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
  console.log(`Server is up on port: ${PORT}`);
});




