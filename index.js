const express = require("express");
const port = process.env.PORT || 8000;
require("dotenv").config();
const app = express();

// urlencoded is a built-in middleware function in express, it parses incoming requests with url encoded payloads and is based on body parser.
app.use(express.urlencoded());

// json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the body parser.
app.use(express.json());

// database configuration imported  from config folder
const db = require("./config/mongoose");

//  Routing
app.use("/", require("./routes/index.js"));

// server listening on defined port
app.listen(port, (err) => {
  if (err) {
    console.log("Error in running server!,", err);
    return;
  }
  console.log(`Express server is running fine on port : ${port}`);
  return;
});
