import { useState } from "react";
import { useTranslation } from "react-i18next";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState(productsData);

  // Inputs for new product
  const [newProduct, setNewProduct] = useState({
    name: { en: "", fi: "", et: "" },
    category: { en: "", fi: "", et: "" },
    price: "",
    image: "",
  });

  // Handle adding a new product
  const handleAddProduct = () => {
    if (!newProduct.name.en || !newProduct.price)
      return alert("Please fill required fields.");

    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId }]);

    // Clear input fields
    setNewProduct({
      name: { en: "", fi: "", et: "" },
      category: { en: "", fi: "", et: "" },
      price: "",
      image: "",
    });
  };

  // Handle deleting a product
  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  // Localized products
  const localizedProducts = products.map((item) => ({
    ...item,
    name: item.name[i18n.language],
    category: item.category[i18n.language],
  }));

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

      {/* --- Add New Product Form --- */}
      <div style={{ marginBottom: "2rem" }}>
        <h3>Add New Product</h3>
        <div style={{ display: "grid", gap: "8px", maxWidth: "400px" }}>
          <input
            type="text"
            placeholder="Name (EN)"
            value={newProduct.name.en}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                name: { ...newProduct.name, en: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Name (FI)"
            value={newProduct.name.fi}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                name: { ...newProduct.name, fi: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Name (ET)"
            value={newProduct.name.et}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                name: { ...newProduct.name, et: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Category (EN)"
            value={newProduct.category.en}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category: { ...newProduct.category, en: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Category (FI)"
            value={newProduct.category.fi}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category: { ...newProduct.category, fi: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Category (ET)"
            value={newProduct.category.et}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category: { ...newProduct.category, et: e.target.value },
              })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>

      <div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>category</th>
              <th>image</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {localizedProducts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} alt={item.name} width="50" />
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
