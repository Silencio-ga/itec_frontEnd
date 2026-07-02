/* 
Componente Header: barra de navegación superior.
Recibe onNavigate para cambiar de vista y view para saber cuál está activa. 
*/

function Header({ onNavigate, view }) {
  /* Array con los botones de navegación.
     Cada uno tiene un label visible y el nombre de la vista a la que lleva. */
  const botones = [
    { label: "Inicio", vista: "list" },
    { label: "Nuevo", vista: "form" },
    { label: "Favoritos", vista: "favorites" },
  ];

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Catalogo de libros</h1>
        <div className="flex gap-2">
          {/* Recorro el array de botones y renderizo uno por uno */}
          {botones.map(({ label, vista }) => (
            <button
              key={vista}
              onClick={() => onNavigate(vista)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                /* Si es la vista actual, pinto el botón de blanco (activo) */
                view === vista
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
