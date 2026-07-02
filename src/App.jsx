/* Importaciones: componentes y hooks */
import { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import BookDetail from "./components/BookDetail";
import BookForm from "./components/BookForm";
import Favoritos from "./components/Favoritos";

function App() {
  /* Estado de navegación:
    - view: qué pantalla se muestra ("list", "detail", "form", "favorites")
    - selectedId: id del libro que se está viendo o editando
    - refreshKey: se incrementa al crear/editar/eliminar para forzar recarga */
  const [view, setView] = useState("list");
  const [selectedId, setSelectedId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  /* Navegación: cada función cambia el view y resetea lo necesario */
  const goToList = () => {
    setView("list");
    setSelectedId(null);
  };

  const goToDetail = (id) => {
    setView("detail");
    setSelectedId(id);
  };

  const goToForm = (id) => {
    setView("form");
    setSelectedId(id ?? null);
  };

  const goToFavorites = () => {
    setView("favorites");
  };

  /* handleSaved: después de crear/editar, incrementa refreshKey
    para que Page.jsx recargue la lista, y vuelve a la vista list */
  const handleSaved = () => {
    setRefreshKey((k) => k + 1);
    setView("list");
  };

  /* handleNavigate: recibe la vista desde el Header y navega según corresponda */
  const handleNavigate = (vista) => {
    if (vista === "form") {
      goToForm(null);
    } else {
      setView(vista);
      setSelectedId(null);
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigate} view={view} />
      <main className="container mx-auto p-6">
        {/* Render condicional: según view, muestro un componente distinto */}
        {view === "list" && (
          <Page
            onDetail={goToDetail}
            onForm={() => goToForm(null)}
            refreshKey={refreshKey}
          />
        )}
        {view === "detail" && (
          <BookDetail id={selectedId} onBack={goToList} onEdit={goToForm} />
        )}
        {view === "form" && (
          <BookForm id={selectedId} onBack={goToList} onSaved={handleSaved} />
        )}
        {view === "favorites" && <Favoritos onDetail={goToDetail} />}
      </main>
    </>
  );
}

export default App;
