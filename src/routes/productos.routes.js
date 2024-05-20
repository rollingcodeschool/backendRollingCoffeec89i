import { Router } from "express";

const router = Router();

// app.get('/prueba',(req, res)=>{
//     console.log('Prueba de solicitud get')
//     //enviar una respuesta
//     res.send('desde mi backend de rolling coffee')
//     })
    
//crear las rutas
router.route('/prueba').get((req, res)=>{
        console.log('Prueba de solicitud get')
        //enviar una respuesta
        res.send('desde mi backend de rolling coffee')
        })

export default router