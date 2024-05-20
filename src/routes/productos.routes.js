import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

//crear las rutas
router.route('/prueba').get(listarProductos);

export default router