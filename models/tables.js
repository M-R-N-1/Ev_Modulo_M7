const Usuario = require("./usuario");
const Rol = require("./rol");

/* 1:N entre Usuario y Rol*/
// .tipoDeRelacion(ModeloRelacionado, {as: 'alias', foreignKey: 'llaveForaneaUtilizadaEnLaOtraTabla',})
Usuario.hasMany(Rol, { as: "roles", foreignKey: "usuarioId" });
// .tipoDeRelacion(ModeloRelacionado, {as: 'alias', foreignKey: 'llaveForanea', targetKey: 'llaveObjetivo'})
Rol.belongsTo(Usuario, {
  as: "usuarios",
  foreignKey: "usuarioId",
  targetKey: "id",
});

module.exports = {
  Usuario,
  Rol,
};
