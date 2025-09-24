function CartPage() {
  // just read directly every time page loads
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function removeItem(id) {
    let updated = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.location.reload(); // quick way to update page
  }

  function clearCart() {
    localStorage.removeItem("cart");
    window.location.reload();
  }

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} – {item.qty} × {item.price} €
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>
          Total: {cart.reduce((sum, i) => sum + i.qty * i.price, 0)} €
        </strong>
      </p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default CartPage;
