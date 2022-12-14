import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const ClineteModelo=sequelize.define('cliente', {
    idcliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    telefono: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: "telefono_UNIQUE"
    },
    identificacion: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('Pedidos pendientes','Sin domicilios'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcliente" },
        ]
      },
      {
        name: "telefono_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "telefono" },
        ]
      },
    ]
  });
  export default ClineteModelo;
