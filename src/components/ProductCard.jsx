import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={"/products/" + product.id}>
        <img src={product.image} alt={product.name} width="150" />
        <h3>{product.name}</h3>
        <p>{product.price} €</p>
      </Link>
    </div>
  );
}

export default ProductCard;
