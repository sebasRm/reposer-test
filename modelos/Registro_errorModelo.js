import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('registro_error', {
    idregistro_error: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    error_iderror: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'error',
        key: 'iderror'
      }
    }
  }, {
    sequelize,
    tableName: 'registro_error',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idregistro_error" },
        ]
      },
      {
        name: "fk_registro_errores_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarios_idusuarios" },
        ]
      },
      {
        name: "fk_registro_error_error1_idx",
        using: "BTREE",
        fields: [
          { name: "error_iderror" },
        ]
      },
    ]
  });
};
