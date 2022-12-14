import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('gerente', {
    idgerente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    }
  }, {
    sequelize,
    tableName: 'gerente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idgerente" },
        ]
      },
      {
        name: "fk_gerente_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarios_idusuarios" },
        ]
      },
    ]
  });
};
