import React from "react";
import productsData from "../data/products.json";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  console.log("This is what product holds", product);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  function addsToCart() {
    // have or need -> what we already have in cart form localStorage, or empty array to push items.
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("This is in cart variable rn:", cart);

    // want to add items to cart if there is none or update quantity if there is
    // need a variable to check if the item is in cart, if we clear the localStorage, there is nothing and we start with empty array
    // the .find method returns a reference to the object in the cart array, if it finds a match
    let exists = cart.find((item) => item.id === product.id);
    // if the item is in cart we add quantity +1, we can do this because th
    console.log("This is whats inside exist variale: ", exists);

    if (exists) {
      // exists is reference to the object in array that is mutable if we change it here we also change its value in cart array that has the same object
      exists.qty += 1;
    } else {
      // if it doesnt exist in the array we add it here, push method to put new item to the array, copy object to not change original, add key qty set value to 1
      cart.push({ ...product, qty: 1 });
    }
    // now put it back to localStorage so it saves between page reloads
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("This is whats inside exist variale: ", exists);
    alert(product.name + " added to cart!");
  }
  3;
  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">Price: {product.price} €</p>
          <button onClick={addsToCart} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
      <br />
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
}

export default ProductDetails;
