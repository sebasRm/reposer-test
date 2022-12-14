import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('compras', {
    idcompra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    factura: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    productos_idproductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'idproducto'
      }
    }
  }, {
    sequelize,
    tableName: 'compras',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcompra" },
        ]
      },
      {
        name: "fk_compras_productos1_idx",
        using: "BTREE",
        fields: [
          { name: "productos_idproductos" },
        ]
      },
    ]
  });
};
