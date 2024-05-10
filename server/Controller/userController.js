const user = require("../Model/user.js");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      let data = await user.getalluser();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching users");
    }
  },

  getOneUser: async (req, res) => {
    try {
      let id = req.params.id;
      const data = await user.getoneUser(id);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching user");
    }
  },

  deleteUser: async (req, res) => {
    try {
      let userId = req.params.id;
      await user.deleteUser(userId);
      res.send("User deleted");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting user");
    }
  },

  updateUser: async (req, res) => {
    try {
      let seekerId = req.params.id;
      let { id, name, lastName,email, password, age} = req.body;
      let body = { id, name, lastName,email, password, age };
      await user.updateUser(seekerId, body);
      res.send("User updated");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error updating user");
    }
  },

  createUser: async (req, res) => {
    try {
      let { id, name, lastName,email, password,  age } = req.body;
      let body = { id, name,lastName, email, password,  age };
      const newUser = await user.createUser(body);
      console.log(newUser.dataValues);
      res.send(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error creating user");
    }
  },
};
