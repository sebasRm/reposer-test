import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const PlatoModelo=  sequelize.define('plato', {
    idplato: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    imagen: {
      type: DataTypes.TEXT,
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
    tableName: 'plato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idplato" },
        ]
      },
      {
        name: "fk_platos_empresa1_idx",
        using: "BTREE",
        fields: [
          { name: "empresa_idempresa" },
        ]
      },
    ]
  });
export default PlatoModelo;
