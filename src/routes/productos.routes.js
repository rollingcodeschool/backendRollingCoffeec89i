import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

//crear las rutas
router.route('/prueba').get(listarProductos);
router.route('/producto').post(crearProducto)
export default router