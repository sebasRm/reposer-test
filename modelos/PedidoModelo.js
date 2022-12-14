import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const PedidoModelo= sequelize.define('pedido', {
    idpedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    precio_pagado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('Sin pagar','Pagada','Sin entregar','Entregado'),
      allowNull: true
    },
    menu_idmenu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'menu',
        key: 'idmenu'
      }
    },
    factura_idfactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'factura',
        key: 'idfactura'
      }
    }
  }, {
    sequelize,
    tableName: 'pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpedido" },
        ]
      },
      {
        name: "fk_pedidos_menu1_idx",
        using: "BTREE",
        fields: [
          { name: "menu_idmenu" },
        ]
      },
      {
        name: "fk_pedidos_factura1_idx",
        using: "BTREE",
        fields: [
          { name: "factura_idfactura" },
        ]
      },
    ]
  });
export default PedidoModelo;
