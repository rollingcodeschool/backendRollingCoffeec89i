import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './src/database/database.js'
import path from 'path'
import { fileURLToPath } from 'url';
import productoRouter from './src/routes/productos.routes.js';

//1- configurar un puerto
const app= express();
//crear una variable
app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port') ,()=>{
    console.info('Estoy escuchando el puerto '+app.get('port') )
})

//2- configurar middlewares
app.use(cors())//permitir conexiones remotas
app.use(morgan('dev'))//datos extras en la terminal
//configurar que se interpreten los datos en formato json y que pueda acceder a los datos del body del request
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//configurar un archivo estatico
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,'/public')))

//3- crear las rutas
//http://localhost:4001/api/prueba

// app.get('/prueba',(req, res)=>{
// console.log('Prueba de solicitud get')
// //enviar una respuesta
// res.send('desde mi backend de rolling coffee')
// })

app.use('/api', productoRouter)

