import { validationResult } from "express-validator";
import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    //pedirle a la BD los productos
    const productos = await Producto.find();
    // enviar la respuesta con los productos
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar los productos" });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //extraer el id o parametro del request
    console.log(req.params.id);
    //pedir a la bd buscar ese producto
    const productoBuscado = await Producto.findById(req.params.id);
    //quiero saber si productoBuscado es null
    if (!productoBuscado) {
      return res
        .status(400)
        .json({ mensaje: `El producto con id: ${req.params.id} no existe` });
    }
    //responder al front con el producto buscado
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al obtener el producto" });
  }
};

export const crearProducto = async (req, res) => {
  try {
    //le vamos a pedir a la bd crear el producto
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    //enviar la respuesta de lo sucedido
    res.status(201).json({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el producto",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    //necesito el id y el body
    //validar los datos del body
    //pedir a la BD editar el producto
    //pedir a la bd buscar ese producto
    const productoBuscado = await Producto.findById(req.params.id);
    //quiero saber si productoBuscado es null
    if (!productoBuscado) {
      return res
        .status(400)
        .json({ mensaje: `El producto con id: ${req.params.id} no existe` });
    }
    const productoEditado = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
    //responder al front con un codigo exitoso
    res.status(200).json({ mensaje: "El producto fue editado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el producto",
    });git 
  }
};

export const borrarProducto = async(req, res)=>{
  try{
    //verificar si existe el id
    const productoBuscado = await Producto.findById(req.params.id);
    //quiero saber si productoBuscado es null
    if (!productoBuscado) {
      return res
        .status(400)
        .json({ mensaje: `El producto con id: ${req.params.id} no existe` });
    }
    //solicitar eliminar el producto de la BD
    await Producto.findByIdAndDelete(req.params.id)
    //respondemos al frontend
    res.status(200).json({mensaje:'El producto fue eliminado correctamente'})
  }catch(error){
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error al intentar borrar un producto'})
  }
}
