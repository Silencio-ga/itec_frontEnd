/* Componente Card: tarjeta individual de un libro.
  Props:
    - libro: { id, titulo, autor, paginas }
    - onDetail(id): va al detalle del libro
    - onDelete(id): elimina el libro
    - onToggleFav(libro): agrega/saca de favoritos (opcional)
     - isFav: true si está en favoritos (opcional) */

function Card({ libro, onDetail, onDelete, onToggleFav, isFav }) {
  return (
    <div className="rounded-2xl shadow-lg bg-white border border-gray-200 flex flex-col h-full">
      {/* Contenido principal: datos del libro */}
      <div className="flex flex-col flex-1 p-6">
        <h2 className="font-bold text-xl mb-2 text-gray-800 line-clamp-1">
          {libro.titulo}
        </h2>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-semibold">Autor:</span> {libro.autor}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          <span className="font-semibold">Páginas:</span> {libro.paginas}
        </p>
      </div>

      {/* Botones de acción */}
      <div className="px-6 pb-4 flex gap-2 flex-wrap">
        {onDetail && (
          <button
            onClick={() => onDetail(libro.id)}
            className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 cursor-pointer"
          >
            Ver detalle
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(libro.id)}
            className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600 cursor-pointer"
          >
            Eliminar
          </button>
        )}
        {onToggleFav && (
          <button
            onClick={() => onToggleFav(libro)}
            className="text-2xl hover:scale-110 transition-transform cursor-pointer"
            title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFav ? "⭐" : "☆"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
