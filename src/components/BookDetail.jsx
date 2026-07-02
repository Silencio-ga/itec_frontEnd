/* Componente BookDetail: muestra el detalle de un libro específico */

import { useState, useEffect } from "react";
import { getLibro, deleteLibro } from "../services/api.js";

function BookDetail({ id, onBack, onEdit }) {
  const [libro, setLibro] = useState(null);

  /* Al montarse, cargo los datos del libro usando el id recibido por props */
  useEffect(() => {
    const cargar = async () => {
      const datos = await getLibro(id);
      setLibro(datos);
    };
    cargar();
  }, [id]);

  /* Elimina el libro y vuelve a la lista */
  const handleDelete = async () => {
    if (confirm("¿Estás seguro de eliminar este libro?")) {
      await deleteLibro(id);
      onBack();
    }
  };

  /* Mientras carga, muestro un mensaje */
  if (!libro) {
    return <p className="text-center text-gray-500 py-10">Cargando...</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{libro.titulo}</h2>

      <div className="space-y-3 text-gray-600 mb-8">
        <p>
          <span className="font-semibold">Autor:</span> {libro.autor}
        </p>
        <p>
          <span className="font-semibold">Páginas:</span> {libro.paginas}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
        >
          Volver
        </button>
        <button
          onClick={() => onEdit(id)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default BookDetail;
