import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Интернет-магазин</h1>

      {products.map(product => (
        <div key={product.id} style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Категория: {product.category}</p>
          <p>Цена: {product.price} ₽</p>
          <p>В наличии: {product.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default App;