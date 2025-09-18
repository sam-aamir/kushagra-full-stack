import React from "react";
import "./App.css";

function App() {
  const products = [
    { name: "Laptop", price: 80000, stock: "In Stock" },
    { name: "Smartphone", price: 35000, stock: "Out of Stock" },
    { name: "Headphones", price: 2500, stock: "In Stock" },
  ];

  function ProductCard({ name, price, stock }) {
    return (
      <div className="product-card">
        <h2>{name}</h2>
        <p>Price: ₹{price}</p>
        <p className={stock === "Out of Stock" ? "out-of-stock" : "in-stock"}>
          {stock}
        </p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
