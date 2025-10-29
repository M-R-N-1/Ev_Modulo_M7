/* TODO EL CRUD */
const { Rol } = require("../models/tables");

const createRol = async (data) => {
  try {
    const newRol = await Rol.create(data);
    return newRol;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getAllRoles = async () => {
  try {
    const roles = await Rol.findAll();
    return roles;
  } catch (error) {
    return false;
  }
};

const getRolById = async (id) => {
  try {
    const rol = await Rol.findByPk(id);
    return rol;
  } catch (error) {
    return false;
  }
};

const updateRol = async (id, data) => {
  try {
    const updatedRol = await Rol.update(data, {
      where: { id },
    });
    return updatedRol;
  } catch (error) {
    return false;
  }
};

const deleteRol = async (id) => {
  try {
    const deleted = await Rol.destroy({
      where: { id },
    });
    return deleted;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createRol,
  getAllRoles,
  getRolById,
  updateRol,
  deleteRol,
};
