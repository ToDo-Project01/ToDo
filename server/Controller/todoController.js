const todo = require("../Model/todo.js");

module.exports = {
  getAlltodos: async (req, res) => {
    try {
      let data = await todo.getallTodo();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching todos");
    }
  },

  getOnetodo: async (req, res) => {
    try {
      let id = req.params.id;
      const data = await todo.getoneTodo(id);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching todo");
    }
  },

  deletetodo: async (req, res) => {
    try {
      let todoId = req.params.id;
      await todo.deleteTodo(todoId);
      res.send("todo deleted");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting todo");
    }
  },

  updatetodo: async (req, res) => {
    try {
      let seekerId = req.params.id;
      let { id, name, lastName,email, password, age} = req.body;
      let body = { id, name, lastName,email, password, age };
      await todo.updateTodo(seekerId, body);
      res.send("todo updated");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error updating todo");
    }
  },

  createtodo: async (req, res) => {
    try {
      let { id, title , description } = req.body;
      let body = { id, title , description };
      const newtodo = await todo.createTodo(body);
      console.log(newtodo.dataValues);
      res.send(newtodo);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error creating todo");
    }
  },
};
