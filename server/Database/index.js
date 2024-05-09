const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.json')
const sequelize = new Sequelize('ToDo', config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql',
}); 

const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER, // Corrected data type to INTEGER
      allowNull: true
    }
  },
  { freezeTableName: true, timestamps: false }
  );
  

  const todo = sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(550),
      allowNull: true
    }
  },
  { freezeTableName: true, timestamps: false }
  );
  

  users.hasMany(todo, { onDelete: 'CASCADE' });
  todo.belongsTo(users)






  sequelize.sync({ alter: false })
    .then(() => {
      console.log('All models were synchronized successfully.');
    })
    .catch((error) => {
      console.error('Unable to synchronize the models:', error);
    });
  
  module.exports = {
    users ,todo
  };