import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const EmpleadoModelo=sequelize.define('empleado', {
    idempleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empresa_idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'idempresa'
      }
    },
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    nomina_idnomina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nomina',
        key: 'idnomina'
      }
    }
  }, {
    sequelize,
    tableName: 'empleado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idempleado" },
        ]
      },
      {
        name: "fk_empleado_empresa1_idx",
        using: "BTREE",
        fields: [
          { name: "empresa_idempresa" },
        ]
      },
      {
        name: "fk_empleado_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
      {
        name: "fk_empleado_nomina1_idx",
        using: "BTREE",
        fields: [
          { name: "nomina_idnomina" },
        ]
      },
    ]
  });
export default EmpleadoModelo;
