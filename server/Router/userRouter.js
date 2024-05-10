const userController = require('../Controller/userController.js')
const userRooter=require('express').Router()

userRooter.get("/getall",userController.getAllUsers)
userRooter.post("/create",userController.createUser)
userRooter.get("/getone/:id",userController.getOneUser)
userRooter.delete("/delete/:id",userController.deleteUser)
userRooter.put("/update/:id",userController.updateUser)

module.exports = userRooter