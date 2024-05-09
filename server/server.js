const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

// Import the database models
const { users } = require("./database/index.js");

app.use(express.json());
app.use(cors());

app.listen(port, function () {
    console.log("listening on port 3000!");
  });
