import Producto from "../database/models/producto.js";

export const listarProductos = (req, res) => {
  console.log("Prueba de solicitud get");
  //enviar una respuesta
  res.send("desde mi backend de rolling coffee");
};
export const crearProducto = async(req, res) => {
  try {
    //validar los datos del producto del ----
    //le vamos a pedir a la bd crear el producto
    console.log(req.body);
    const productoNuevo = new Producto(req.body)
    await productoNuevo.save();
    //enviar la respuesta de lo sucedido
    res.status(201).json({mensaje: 'El producto fue creado correctamente'})
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el producto",
    });
  }
};
