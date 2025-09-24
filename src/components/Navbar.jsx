import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/products">
        <button>Producs</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
}

export default Navbar;
