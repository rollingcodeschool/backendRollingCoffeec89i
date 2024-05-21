import Producto from "../database/models/producto.js";

export const listarProductos = (req, res) => {
  console.log("Prueba de solicitud get");
  //enviar una respuesta
  res.send("desde mi backend de rolling coffee");
};
export const crearProducto = (req, res) => {
//validar los datos del producto del ----
//le vamos a pedir a la bd crear el producto
//enviar la respuesta de lo sucedido
};
