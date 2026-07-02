/* Componente Page: muestra la lista de todos los libros */

import { useState, useEffect } from "react";
import { getLibros, deleteLibro } from "../services/api.js";
import { addFavorito, removeFavorito, isFavorito } from "../services/localStorage.js";
import Card from "./Card";

function Page({ onDetail, onForm, refreshKey }) {
  const [libros, setLibros] = useState([]);

  /* useEffect ejecuta esta función cada vez que refreshKey cambia.
      Así la lista se actualiza cuando se crea, edita o elimina un libro. */
  useEffect(() => {
    const cargar = async () => {
      const datos = await getLibros();
      setLibros(datos);
    };
    cargar();
  }, [refreshKey]);

  /* handleDelete: confirma, elimina el libro y recarga la lista */
  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de eliminar este libro?")) {
      await deleteLibro(id);
      const datos = await getLibros();
      setLibros(datos);
    }
  };

  /* handleToggleFav: agrega o saca un libro de favoritos */
  const handleToggleFav = (libro) => {
    if (isFavorito(libro.id)) {
      removeFavorito(libro.id);
    } else {
      addFavorito(libro);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Todos los libros</h2>
        <button
          onClick={onForm}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          + Nuevo
        </button>
      </div>

      {libros.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No hay libros cargados aún.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {libros.map((libro) => (
            <Card
              key={libro.id}
              libro={libro}
              onDetail={onDetail}
              onDelete={handleDelete}
              onToggleFav={handleToggleFav}
              isFav={isFavorito(libro.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
