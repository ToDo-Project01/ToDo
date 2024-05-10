const { users } = require("../Database//index.js");

const getalluser=()=>{
    return users.findAll()
}
const   createUser=(data)=>{
   return  users.create(data)
}
const updateUser = (userId, body) => {
    return users.update(body, { where: { id: userId } });
}

const deleteUser=(userId)=>{
users.destroy({where:{id:userId}})
}
const getoneUser=(userId)=>{
return users.findOne({where:{id:userId}})
}

module.exports={
    getalluser:getalluser,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    getoneUser:getoneUser
}