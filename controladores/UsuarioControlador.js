import UsuarioModelo from "../modelos/UsuarioModelo.js";
/*
Relaciones

*/

/*
Consultas basicas
*/
export const getAllUsuario=async(req,res)=>
{
    UsuarioModelo.findAll().then(usuario =>
    {   
        res.json(usuario);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getUsuario=async(req,res)=>
{
    UsuarioModelo.findAll(
    {
        where:
        {
            idusuario: req.params.idusuario
        }
    }).then(usuario =>
    {   
        res.json(usuario);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createUsuario=async(req,res)=>
{
    UsuarioModelo.create(req.body).then(usuario =>
    {   
        res.json(
        {
            "message":"usuario registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateUsuario=async(req,res)=>
{
    UsuarioModelo.update(
    req.body, 
    {   
        where:
        {
            idusuario: req.params.idusuario
        }
    }).then(usuario =>
    {   
        res.json(
        {
            "message":"Usuario actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteUsuario=async(req,res)=>
{
    UsuarioModelo.destroy(
    {   
        where:
        {
            idusuario: req.params.idusuario
        }
    }).then(usuario =>
    {   
        res.json(
        {
            "message":"Usuario actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*
    Consultas complejas
    ( =usuario or usuario=identificacion) and usuarios.contrasena=pass;
*/
export const loginUsuario=async(req,res)=>
{
    UsuarioModelo.findAll(
    {
        where: 
        {            
            
                        nick: req.params.nick,
                    
        }      
    }).then(usuario =>
    {   
        res.json(usuario);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 
