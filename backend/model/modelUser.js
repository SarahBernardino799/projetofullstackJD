const { DataTypes } = require("sequelize");
const sequelize = require("../bancoDados");

const Usuario = sequelize.define("Usuarios", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


module.exports = Usuario;