import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('restaurante', {
    idrestaurante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: true
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
    tableName: 'restaurante',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrestaurante" },
        ]
      },
      {
        name: "fk_restaurante_empresa1_idx",
        using: "BTREE",
        fields: [
          { name: "empresa_idempresa" },
        ]
      },
    ]
  });
};
