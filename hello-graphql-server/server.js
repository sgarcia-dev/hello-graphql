// Imports: Express
const express = require("express");
const APP = express();
// Imports: GraphQL
const SERVER = require("./schema.js");
// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP
});
// Express: Port
const PORT = 9000 || process.env;
// Express: Listener
APP.listen(PORT, () => {
  console.log(
    `🚀 The server has started running at: http://localhost:${PORT}${
      SERVER.graphqlPath
    }`
  );
});
