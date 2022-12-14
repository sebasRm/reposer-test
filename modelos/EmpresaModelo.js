import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('empresa', {
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NIT: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    gerente_idgerente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gerente',
        key: 'idgerente'
      }
    }
  }, {
    sequelize,
    tableName: 'empresa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idempresa" },
        ]
      },
      {
        name: "fk_restaurante_gerente1_idx",
        using: "BTREE",
        fields: [
          { name: "gerente_idgerente" },
        ]
      },
    ]
  });
};
