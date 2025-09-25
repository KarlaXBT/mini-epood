import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import { useState } from "react";

function App() {
  // need to know if mode is saved to localStorage,  if not it will be false,
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // function that sets darkMode true/false and stores it to localStorage
  function setMode(boolean) {
    setIsDarkMode(boolean);
    localStorage.setItem("darkMode", boolean);
  }

  console.log("Right now darkMode is:", isDarkMode);
  return (
    <>
      {/* class based on conditional  */}
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <br />

        <button onClick={() => setMode(!isDarkMode)}>☀️ / 🌙</button>
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />

          <Route
            path="*"
            element={
              <div>
                <h2>404 Page Not Found</h2>
                <Link to="/">
                  <button>Back</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
