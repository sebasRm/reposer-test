import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('nomina', {
    idnomina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.ENUM('Activo','Inactivo'),
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
    tableName: 'nomina',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idnomina" },
        ]
      },
      {
        name: "fk_nomina_restaurante1_idx",
        using: "BTREE",
        fields: [
          { name: "restaurante_idrestaurante" },
        ]
      },
    ]
  });
};
