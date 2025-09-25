import { useState } from "react";
import { useTranslation } from "react-i18next";

function CartPage() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  function removeItem(id) {
    let updated = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  }

  function clearCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>{t("shoppingcart")}</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name[i18n.language]} – {item.qty} × {item.price} €
            <button onClick={() => removeItem(item.id)}>{t("remove")}</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>
          {t("total")}: {cart.reduce((sum, i) => sum + i.qty * i.price, 0)} €
        </strong>
      </p>
      <button onClick={clearCart}>{t("clearCart")}</button>
    </div>
  );
}

export default CartPage;
