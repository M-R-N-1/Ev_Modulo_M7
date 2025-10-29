const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rol = sequelize.define("rol", {
  id: {
    type: DataTypes.INTEGER, // Tipo de dato entero
    primaryKey: true, // Llave primaria
    autoIncrement: true, // Incremento automático
  },
  nombre: {
    type: DataTypes.STRING, // Tipo de dato cadena
    allowNull: false, // No permite valores nulos (obligatorio)
  },
});

module.exports = Rol;
