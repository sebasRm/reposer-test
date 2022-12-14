import express  from "express";
import { getAllClientes,getCliente,createCliente,updateCliente ,deleteCliente } from "../controladores/ClienteControlador.js";
import { getAllFactura,getFactura,createFactura,updateFactura ,deleteFactura } from "../controladores/FacturaControlador.js";
import { getAllUsuario,getUsuario,createUsuario,updateUsuario ,deleteUsuario, loginUsuario } from "../controladores/UsuarioControlador.js";

const router=express.Router();
router.get('/usuario/',getAllUsuario);
router.get('/usuario/:idUsuario',getUsuario);
router.post('/usuario/',createUsuario);
router.put('/usuario/:idUsuario',updateUsuario);
router.delete('/usuario/:idUsuario',deleteUsuario);
router.get('/login/:nick',loginUsuario);

router.get('/cliente/',getAllClientes);
router.get('/cliente/:idcliente',getCliente);
router.post('/cliente/',createCliente);
router.put('/cliente/:idcliente',updateCliente);
router.delete('/cliente/:idcliente',deleteCliente);

router.get('/factura/',getAllFactura);
router.get('/factura/:idFactura',getFactura);
router.post('/factura/',createFactura);
router.put('/factura/:idFactura',updateFactura);
router.delete('/factura/:idFactura',deleteFactura);
export default router;