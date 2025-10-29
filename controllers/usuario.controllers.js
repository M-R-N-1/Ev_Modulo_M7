/* TODO EL CRUD */
const { Usuario } = require("../models/tables");

const createUsuario = async (data) => {
  try {
    const newUsuario = await Usuario.create(data);
    return newUsuario;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getAllUsuarios = async () => {
  try {
    const usuarios = await Usuario.findAll();
    return usuarios;
  } catch (error) {
    return false;
  }
};

const getUsuarioById = async (id) => {
  try {
    const usuario = await Usuario.findByPk(id);
    return usuario;
  } catch (error) {
    return false;
  }
};

const updateUsuario = async (id, data) => {
  try {
    const updatedUsuario = await Usuario.update(data, {
      where: { id },
    });
    return updatedUsuario;
  } catch (error) {
    return false;
  }
};

const deleteUsuario = async (id) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id },
    });
    return deleted;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
};
