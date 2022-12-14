import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('material', {
    idmaterial: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    categoria: {
      type: DataTypes.ENUM('Domicilio','Pedido','Domicilios y pedidos','Servi rapi'),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('Activo','Inactivo'),
      allowNull: true,
      defaultValue: "Activo"
    },
    productos_idproductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'idproducto'
      }
    },
    plato_idplato: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plato',
        key: 'idplato'
      }
    }
  }, {
    sequelize,
    tableName: 'material',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmaterial" },
        ]
      },
      {
        name: "idmateriales_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmaterial" },
        ]
      },
      {
        name: "fk_materiales_productos1_idx",
        using: "BTREE",
        fields: [
          { name: "productos_idproductos" },
        ]
      },
      {
        name: "fk_material_plato1_idx",
        using: "BTREE",
        fields: [
          { name: "plato_idplato" },
        ]
      },
    ]
  });
};
