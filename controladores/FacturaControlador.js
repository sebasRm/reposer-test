import FacturaModelo from "../modelos/FacturaModelo.js";
import UsuarioModelo from "../modelos/UsuarioModelo.js";
import EmpleadoModelo from "../modelos/EmpleadoModelo.js";
import MenuModelo from "../modelos/MenuModelo.js";
import PlatoModelo from "../modelos/PlatoModelo.js";
import PedidosModelo from "../modelos/PedidoModelo.js";

//Relaciones
FacturaModelo.belongsTo(EmpleadoModelo,{foreignKey:'empleado_idempleado', targetKey:'idempleado'});
EmpleadoModelo.belongsTo(UsuarioModelo,{foreignKey:'usuario_idusuario', targetKey:'idusuario'});

FacturaModelo.hasMany(PedidosModelo,{foreignKey:'factura_idfactura', targetKey:'idfactura'});
PedidosModelo.belongsTo(MenuModelo,{foreignKey:'menu_idmenu', targetKey:'idmenu'});
MenuModelo.belongsTo(PlatoModelo,{foreignKey:'plato_idplato', targetKey:'idplato'});

//Consultas
export const getAllFactura=async(req,res)=>
{
    FacturaModelo.findAll
    (
        {
            include:
            [
                {
                    model:EmpleadoModelo,                   
                    include: 
                    [
                        {
                            model:UsuarioModelo,
                            attributes:['nombres', 'apellidos']
                        }
                    ]
                },{
                    model:PedidosModelo,                   
                    include: 
                    [
                        {
                            model:MenuModelo,
                            include: 
                            [
                                {
                                    model:PlatoModelo
                                }
                            ]
                        }
                    ]
                }
            ], 
            
        }
    ).then(factura =>
    {   
        res.json(factura);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getFactura=async(req,res)=>
{
    FacturaModelo.findAll(
    {
        where:
        {
            idfactura: req.params.idfactura
        }
    }).then(factura =>
    {   
        res.json(factura);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createFactura=async(req,res)=>
{
    FacturaModelo.create(req.body).then(factura =>
    {   
        res.json(
        {
            "message":"Factura registrada"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateFactura=async(req,res)=>
{
    FacturaModelo.update(
    req.body, 
    {   
        where:
        {
            idfactura: req.params.idcliente
        }
    }).then(clientes =>
    {   
        res.json(
        {
            "message":"Factura actualizada"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteFactura=async(req,res)=>
{
    FacturaModelo.destroy(
    {   
        where:
        {
            idfactura: req.params.idfactura
        }
    }).then(clientes =>
    {   
        res.json(
        {
            "message":"Cliente actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}