import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

//crear las rutas
router.route('/prueba').get(listarProductos);
router.route('/productos').post(crearProducto)
export default router