import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('error', {
    iderror: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mensaje_idmensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mensaje',
        key: 'idmensaje'
      }
    },
    descripcion_error: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'error',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iderror" },
        ]
      },
      {
        name: "fk_error_mensaje1_idx",
        using: "BTREE",
        fields: [
          { name: "mensaje_idmensaje" },
        ]
      },
    ]
  });
};
