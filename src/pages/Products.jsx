import { useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState(productsData);
  return (
    <div>
      <h2>Products</h2>
      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
