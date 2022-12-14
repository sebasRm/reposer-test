import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const FacturaModelo= sequelize.define('factura', {
    idfactura: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referencia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pagado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    precio_envio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    estado: {
      type: DataTypes.ENUM('Sin pagar','Pagada','Sin entregar','Entregado'),
      allowNull: true
    },
    turno_idturno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'turno',
        key: 'idturno'
      }
    },
    mesa_idmesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mesa',
        key: 'idmesa'
      }
    },
    cliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    },
    empleado_idempleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empleado',
        key: 'idempleado'
      }
    }
  }, {
    sequelize,
    tableName: 'factura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfactura" },
        ]
      },
      {
        name: "fk_facturas_empleado1_idx",
        using: "BTREE",
        fields: [
          { name: "empleado_idempleado" },
        ]
      },
      {
        name: "fk_factura_turno1_idx",
        using: "BTREE",
        fields: [
          { name: "turno_idturno" },
        ]
      },
      {
        name: "fk_factura_mesa1_idx",
        using: "BTREE",
        fields: [
          { name: "mesa_idmesa" },
        ]
      },
      {
        name: "fk_factura_cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "cliente_idcliente" },
        ]
      },
    ]
  });
export default FacturaModelo;