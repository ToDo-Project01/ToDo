const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

const userRooter = require("./Router/userRouter.js")
const todoRooter = require("./Router/todoRooter.js")
const routerauth = require("./Router/AuthRouter.js")

app.use(express.json());
app.use(cors());

app.use('/user',userRooter)
app.use('/todo',todoRooter)
app.use('/auth',routerauth)






app.listen(port, function () {
    console.log("listening on port 3000!");
  });
