import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('mesa', {
    idmesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('Desocupada','Ocupada'),
      allowNull: true
    },
    restaurante_idrestaurante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurante',
        key: 'idrestaurante'
      }
    }
  }, {
    sequelize,
    tableName: 'mesa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmesa" },
        ]
      },
      {
        name: "fk_mesas_restaurante1_idx",
        using: "BTREE",
        fields: [
          { name: "restaurante_idrestaurante" },
        ]
      },
    ]
  });
};
