/* Componente Favoritos: muestra los libros guardados en localStorage */

import { useState, useEffect } from "react";
import { getFavoritos, removeFavorito } from "../services/localStorage.js";
import Card from "./Card";

function Favoritos({ onDetail }) {
  const [favoritos, setFavoritos] = useState([]);

  /* Al montarse, cargo los favoritos guardados en localStorage */
  useEffect(() => {
    setFavoritos(getFavoritos());
  }, []);

  /* Saca un libro de favoritos y actualiza la lista visible */
  const handleToggleFav = (libro) => {
    removeFavorito(libro.id);
    setFavoritos(getFavoritos());
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Mis libros favoritos
      </h2>

      {favoritos.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No tenés favoritos aún.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritos.map((libro) => (
            <Card
              key={libro.id}
              libro={libro}
              onDetail={onDetail}
              onToggleFav={handleToggleFav}
              isFav={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
