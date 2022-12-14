import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('turno', {
    idturno: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'turno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idturno" },
        ]
      },
    ]
  });
};
