import express from "express";
import cors from 'cors';
//import db from "./mundo/DataBase.js";
import rutas from "./rutas/Rutas.js";

const app= express();

app.use(cors());
app.use(express.json());
app.use('', rutas);
try {
  //  db.authenticate();
    console.log("Conexión exitosa");
} catch (error) {
    console.log("El error de conexión es: "+error);
}

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

app.listen(8000,()=>{
   console.log('Server Up running in http://localhost:8000/');
});
