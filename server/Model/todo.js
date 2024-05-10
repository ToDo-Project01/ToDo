const { todo } = require("../Database//index.js");

const getallTodo=()=>{
    return todo.findAll()
}
const   createTodo=(data)=>{
   return  todo.create(data)
}
const updateTodo = (TodoId, body) => {
    return todo.update(body, { where: { id: TodoId } });
}

const deleteTodo=(TodoId)=>{
todo.destroy({where:{id:TodoId}})
}
const getoneTodo=(TodoId)=>{
return todo.findOne({where:{id:TodoId}})
}

module.exports={
    getallTodo:getallTodo,
    createTodo:createTodo,
    updateTodo:updateTodo,
    deleteTodo:deleteTodo,
    getoneTodo:getoneTodo
}