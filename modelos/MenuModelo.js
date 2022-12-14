import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const MenuModelo=sequelize.define('menu', {
    idmenu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    restaurante_idrestaurante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurante',
        key: 'idrestaurante'
      }
    },
    plato_idplato: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plato',
        key: 'idplato'
      }
    },
    estado: {
      type: DataTypes.ENUM('Activo','Inactivo'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'menu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmenu" },
        ]
      },
      {
        name: "fk_menu_restaurante1_idx",
        using: "BTREE",
        fields: [
          { name: "restaurante_idrestaurante" },
        ]
      },
      {
        name: "fk_menu_plato1_idx",
        using: "BTREE",
        fields: [
          { name: "plato_idplato" },
        ]
      },
    ]
  });
export default MenuModelo;
