var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _compras = require("./compras");
var _consumo = require("./consumo");
var _empleado = require("./empleado");
var _empresa = require("./empresa");
var _error = require("./error");
var _factura = require("./factura");
var _gerente = require("./gerente");
var _inventario = require("./inventario");
var _material = require("./material");
var _mensaje = require("./mensaje");
var _menu = require("./menu");
var _mesa = require("./mesa");
var _nomina = require("./nomina");
var _pedido = require("./pedido");
var _plato = require("./plato");
var _producto = require("./producto");
var _registro_error = require("./registro_error");
var _restaurante = require("./restaurante");
var _turno = require("./turno");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var compras = _compras(sequelize, DataTypes);
  var consumo = _consumo(sequelize, DataTypes);
  var empleado = _empleado(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var error = _error(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var gerente = _gerente(sequelize, DataTypes);
  var inventario = _inventario(sequelize, DataTypes);
  var material = _material(sequelize, DataTypes);
  var mensaje = _mensaje(sequelize, DataTypes);
  var menu = _menu(sequelize, DataTypes);
  var mesa = _mesa(sequelize, DataTypes);
  var nomina = _nomina(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var plato = _plato(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var registro_error = _registro_error(sequelize, DataTypes);
  var restaurante = _restaurante(sequelize, DataTypes);
  var turno = _turno(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  factura.belongsTo(cliente, { as: "cliente_idcliente_cliente", foreignKey: "cliente_idcliente"});
  cliente.hasMany(factura, { as: "facturas", foreignKey: "cliente_idcliente"});
  factura.belongsTo(empleado, { as: "empleado_idempleado_empleado", foreignKey: "empleado_idempleado"});
  empleado.hasMany(factura, { as: "facturas", foreignKey: "empleado_idempleado"});
  empleado.belongsTo(empresa, { as: "empresa_idempresa_empresa", foreignKey: "empresa_idempresa"});
  empresa.hasMany(empleado, { as: "empleados", foreignKey: "empresa_idempresa"});
  plato.belongsTo(empresa, { as: "empresa_idempresa_empresa", foreignKey: "empresa_idempresa"});
  empresa.hasMany(plato, { as: "platos", foreignKey: "empresa_idempresa"});
  producto.belongsTo(empresa, { as: "empresa_idempresa_empresa", foreignKey: "empresa_idempresa"});
  empresa.hasMany(producto, { as: "productos", foreignKey: "empresa_idempresa"});
  restaurante.belongsTo(empresa, { as: "empresa_idempresa_empresa", foreignKey: "empresa_idempresa"});
  empresa.hasMany(restaurante, { as: "restaurantes", foreignKey: "empresa_idempresa"});
  registro_error.belongsTo(error, { as: "error_iderror_error", foreignKey: "error_iderror"});
  error.hasMany(registro_error, { as: "registro_errors", foreignKey: "error_iderror"});
  pedido.belongsTo(factura, { as: "factura_idfactura_factura", foreignKey: "factura_idfactura"});
  factura.hasMany(pedido, { as: "pedidos", foreignKey: "factura_idfactura"});
  empresa.belongsTo(gerente, { as: "gerente_idgerente_gerente", foreignKey: "gerente_idgerente"});
  gerente.hasMany(empresa, { as: "empresas", foreignKey: "gerente_idgerente"});
  error.belongsTo(mensaje, { as: "mensaje_idmensaje_mensaje", foreignKey: "mensaje_idmensaje"});
  mensaje.hasMany(error, { as: "errors", foreignKey: "mensaje_idmensaje"});
  pedido.belongsTo(menu, { as: "menu_idmenu_menu", foreignKey: "menu_idmenu"});
  menu.hasMany(pedido, { as: "pedidos", foreignKey: "menu_idmenu"});
  factura.belongsTo(mesa, { as: "mesa_idmesa_mesa", foreignKey: "mesa_idmesa"});
  mesa.hasMany(factura, { as: "facturas", foreignKey: "mesa_idmesa"});
  empleado.belongsTo(nomina, { as: "nomina_idnomina_nomina", foreignKey: "nomina_idnomina"});
  nomina.hasMany(empleado, { as: "empleados", foreignKey: "nomina_idnomina"});
  material.belongsTo(plato, { as: "plato_idplato_plato", foreignKey: "plato_idplato"});
  plato.hasMany(material, { as: "materials", foreignKey: "plato_idplato"});
  menu.belongsTo(plato, { as: "plato_idplato_plato", foreignKey: "plato_idplato"});
  plato.hasMany(menu, { as: "menus", foreignKey: "plato_idplato"});
  compras.belongsTo(producto, { as: "productos_idproductos_producto", foreignKey: "productos_idproductos"});
  producto.hasMany(compras, { as: "compras", foreignKey: "productos_idproductos"});
  consumo.belongsTo(producto, { as: "productos_idproductos_producto", foreignKey: "productos_idproductos"});
  producto.hasMany(consumo, { as: "consumos", foreignKey: "productos_idproductos"});
  inventario.belongsTo(producto, { as: "productos_idproductos_producto", foreignKey: "productos_idproductos"});
  producto.hasMany(inventario, { as: "inventarios", foreignKey: "productos_idproductos"});
  material.belongsTo(producto, { as: "productos_idproductos_producto", foreignKey: "productos_idproductos"});
  producto.hasMany(material, { as: "materials", foreignKey: "productos_idproductos"});
  inventario.belongsTo(restaurante, { as: "restaurante_idrestaurante_restaurante", foreignKey: "restaurante_idrestaurante"});
  restaurante.hasMany(inventario, { as: "inventarios", foreignKey: "restaurante_idrestaurante"});
  menu.belongsTo(restaurante, { as: "restaurante_idrestaurante_restaurante", foreignKey: "restaurante_idrestaurante"});
  restaurante.hasMany(menu, { as: "menus", foreignKey: "restaurante_idrestaurante"});
  mesa.belongsTo(restaurante, { as: "restaurante_idrestaurante_restaurante", foreignKey: "restaurante_idrestaurante"});
  restaurante.hasMany(mesa, { as: "mesas", foreignKey: "restaurante_idrestaurante"});
  nomina.belongsTo(restaurante, { as: "restaurante_idrestaurante_restaurante", foreignKey: "restaurante_idrestaurante"});
  restaurante.hasMany(nomina, { as: "nominas", foreignKey: "restaurante_idrestaurante"});
  factura.belongsTo(turno, { as: "turno_idturno_turno", foreignKey: "turno_idturno"});
  turno.hasMany(factura, { as: "facturas", foreignKey: "turno_idturno"});
  empleado.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(empleado, { as: "empleados", foreignKey: "usuario_idusuario"});
  gerente.belongsTo(usuario, { as: "usuarios_idusuarios_usuario", foreignKey: "usuarios_idusuarios"});
  usuario.hasMany(gerente, { as: "gerentes", foreignKey: "usuarios_idusuarios"});
  registro_error.belongsTo(usuario, { as: "usuarios_idusuarios_usuario", foreignKey: "usuarios_idusuarios"});
  usuario.hasMany(registro_error, { as: "registro_errors", foreignKey: "usuarios_idusuarios"});

  return {
    cliente,
    compras,
    consumo,
    empleado,
    empresa,
    error,
    factura,
    gerente,
    inventario,
    material,
    mensaje,
    menu,
    mesa,
    nomina,
    pedido,
    plato,
    producto,
    registro_error,
    restaurante,
    turno,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
