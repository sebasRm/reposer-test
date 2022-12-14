import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const UsuarioModelo =sequelize.define('usuario', {
    idusuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo_identificacion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    identificacion: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    contrasena: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rol: {
      type: DataTypes.ENUM('Gerente','Cajero','Cocinero','Mesero'),
      allowNull: true
    },
    nick: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "nick_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idusuario" },
        ]
      },
      {
        name: "nick_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nick" },
        ]
      },
    ]
  });
  export default UsuarioModelo;
