import React from "react";
import productsData from "../data/products.json";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductDetails() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const product = productsData.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  function addsToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name[i18n.language] + " added to cart!");
  }

  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img
          src={product.image}
          alt={product.name[i18n.language]}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-name">{product.name[i18n.language]}</h2>
          <p className="product-category">
            Category: {product.category[i18n.language]}
          </p>
          <p className="product-price">Price: {product.price} €</p>
          <button onClick={addsToCart} className="add-to-cart">
            {t("addToCart")}
          </button>
        </div>
      </div>
      <br />
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ {t("back")}
      </button>
    </div>
  );
}

export default ProductDetails;
