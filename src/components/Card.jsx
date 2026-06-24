function Card({ imagen, titulo, descripcion, precio }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 flex flex-col h-full">
      <img
        className="w-full h-64 object-contain p-4"
        src={imagen}
        alt={titulo}
      />
      <div className="flex flex-col flex-1 px-6 pb-6 ">
        <h2 className="font-bold text-xl mb-2 text-gray-800 line-clamp-1">{titulo}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {descripcion}
        </p>
        <p className="text-2xl font-bold text-blue-600">${precio}</p>
      </div>
    </div>
  );
}

export default Card;
