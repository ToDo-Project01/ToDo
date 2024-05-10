const todoController = require('../Controller/todoController.js')
const todoRooter=require('express').Router()

todoRooter.get("/getall",todoController.getAlltodos)
todoRooter.post("/create",todoController.createtodo)
todoRooter.get("/getone/:id",todoController.getOnetodo)
todoRooter.delete("/delete/:id",todoController.deletetodo)
todoRooter.put("/update/:id",todoController.updatetodo)

module.exports = todoRooter