/* Archivo que centraliza todas las llamadas a mi BackEnd */

import axios from "axios";

/* Creo una instancia de axios con la URL base del backend*/
const api = axios.create({ baseURL: "http://localhost:8000" });

/* GET /libros/ → Obtiene TODOS los libros */
const getLibros = async () => {
  try {
    const respuesta = await api.get("/libros");
    return respuesta.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/* GET /libros/{id} → Obtiene UN libro por su ID */
const getLibro = async (id) => {
  try {
    const respuesta = await api.get(`/libros/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/* POST /libros/ → Crea un NUEVO libro */
const createLibro = async (libro) => {
  try {
    const respuesta = await api.post("/libros/", libro);
    return respuesta.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/* PUT /libros/{id} → Actualiza un libro EXISTENTE */
const updateLibro = async (id, libro) => {
  try {
    const respuesta = await api.put(`/libros/${id}`, libro);
    return respuesta.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/* DELETE /libros/{id} → Elimina un libro */
const deleteLibro = async (id) => {
  try {
    const respuesta = await api.delete(`/libros/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getLibros, getLibro, createLibro, updateLibro, deleteLibro };
