import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

export default function() {
  return sequelize.define('inventario', {
    idinventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    productos_idproductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'idproducto'
      }
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
    tableName: 'inventario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idinventario" },
        ]
      },
      {
        name: "fk_inventario_productos1_idx",
        using: "BTREE",
        fields: [
          { name: "productos_idproductos" },
        ]
      },
      {
        name: "fk_inventario_restaurante1_idx",
        using: "BTREE",
        fields: [
          { name: "restaurante_idrestaurante" },
        ]
      },
    ]
  });
};
