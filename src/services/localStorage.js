/* Archivo para manejar los favoritos en el localStorage */

const STORAGE_KEY = "favoritos";

/* Obtiene el array de favoritos guardado en localStorage*/
const getFavoritos = () => {
  const datos = localStorage.getItem(STORAGE_KEY);
  return datos ? JSON.parse(datos) : [];
};

/* Agrega un libro a favoritos solo si no está ya guardado*/
const addFavorito = (libro) => {
  const favoritos = getFavoritos();
  const existe = favoritos.some((fav) => fav.id === libro.id);
  if (!existe) {
    favoritos.push(libro);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
  }
};

/* Elimina un libro de favoritos filtrando por su id */
const removeFavorito = (id) => {
  const favoritos = getFavoritos();
  const filtrados = favoritos.filter((fav) => fav.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtrados));
};

/* Verifica si un libro (por su id) está en favoritos y devuelve true o false */
const isFavorito = (id) => {
  const favoritos = getFavoritos();
  return favoritos.some((fav) => fav.id === id);
};

export { getFavoritos, addFavorito, removeFavorito, isFavorito };
