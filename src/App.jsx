import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductos(res.data);
    };
    fetchProductos();
  }, []);

  console.log(productos);
  return (
    <>
      <Header />
      <main className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <Card
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
          />
        ))}
      </main>
    </>
  );
}

export default App;
