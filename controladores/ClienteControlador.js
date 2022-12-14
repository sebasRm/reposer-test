import ClienteModelo from "../modelos/ClienteModelo.js";
export const getAllClientes=async(req,res)=>
{
    ClienteModelo.findAll().then(clientes =>
    {   
        res.json(clientes);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getCliente=async(req,res)=>
{
    ClienteModelo.findAll(
    {
        where:
        {
            idcliente: req.params.idcliente
        }
    }).then(clientes =>
    {   
        res.json(clientes);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createCliente=async(req,res)=>
{
    ClienteModelo.create(req.body).then(clientes =>
    {   
        res.json(
        {
            "message":"Cliente registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateCliente=async(req,res)=>
{
    ClienteModelo.update(
    req.body, 
    {   
        where:
        {
            idcliente: req.params.idcliente
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

export const deleteCliente=async(req,res)=>
{
    ClienteModelo.destroy(
    {   
        where:
        {
            idcliente: req.params.idcliente
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