import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('producto', {
    idproducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    stock_minimo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    empresa_idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'idempresa'
      }
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproducto" },
        ]
      },
      {
        name: "fk_productos_empresa1_idx",
        using: "BTREE",
        fields: [
          { name: "empresa_idempresa" },
        ]
      },
    ]
  });
};
