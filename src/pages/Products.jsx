import { useState } from "react";
import { useTranslation } from "react-i18next";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState(productsData);

  return (
    <div>
      <h2>
        {i18n.language === "en"
          ? "Products"
          : i18n.language === "fi"
          ? "Tuotteet"
          : "Tooted"}
      </h2>
      <div className="grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={{
              ...item,
              name: item.name[i18n.language],
              category: item.category[i18n.language],
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
