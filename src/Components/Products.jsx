import React from "react";
import "./Products.css";
import ghost from "../assets/images/ghost.png";
import FreeFire from "../assets/images/FreeFire.png";
import Myst from "../assets/images/Myst.jpg";
import Witcher from "../assets/images/Witcher.jpg";
const productsList = [
  {
    id: 1,
    name: "Ghost City",
    price: "80 $",
    description: "Classical VICE CITY 2005 published",
    image: ghost,
  },
  {
    id: 2,
    name: "Free Fire",
    price: "Free",
    description: "Battle Royale Game",
    image: FreeFire,
  },
  {
    id: 3,
    name: "Myst",
    price: "99.99$",
    description: "Cool minty freshness in every move.",
    image: Myst,
  },
  {
    id: 4,
    name: "The Witcher 3: Wild Hunt",
    price: "39.99 $",
    description: "An epic RPG adventure in a vast open world.",
    image: Witcher,
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <p>Explore our delicious iced tea varieties!</p>
      <div className="products-grid">
        {productsList.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-thumb">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-body">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
