import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('consumo', {
    idconsumo: {
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
    tableName: 'consumo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idconsumo" },
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
