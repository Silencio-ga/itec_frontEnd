/* Componente BookForm: formulario para crear o editar un libro */

import { useState, useEffect } from "react";
import { getLibro, createLibro, updateLibro } from "../services/api.js";

function BookForm({ id, onBack, onSaved }) {
  /* Estado local para los campos del formulario */
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [paginas, setPaginas] = useState("");

  /* Si hay id, estoy en modo edición: cargo los datos del libro */
  useEffect(() => {
    if (id) {
      const cargar = async () => {
        const libro = await getLibro(id);
        if (libro) {
          setTitulo(libro.titulo);
          setAutor(libro.autor);
          setPaginas(String(libro.paginas));
        }
      };
      cargar();
    }
  }, [id]);

  /* Envía el formulario: crea o actualiza según si hay id */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const libro = {
      titulo,
      autor,
      paginas: Number(paginas),
    };

    if (id) {
      await updateLibro(id, libro);
    } else {
      await createLibro(libro);
    }

    onSaved();
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {id ? "Editar libro" : "Nuevo libro"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Título
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Autor
          </label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Páginas
          </label>
          <input
            type="number"
            value={paginas}
            onChange={(e) => setPaginas(e.target.value)}
            required
            min="1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            {id ? "Guardar cambios" : "Crear libro"}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
