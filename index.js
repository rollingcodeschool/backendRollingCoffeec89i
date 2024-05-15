import express from 'express';

//1- configurar un puerto
const app= express();
//crear una variable
app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port') ,()=>{
    console.info('Estoy escuchando el puerto '+app.get('port') )
})

//2- configurar middlewares

//3- crear las rutas