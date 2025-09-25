import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/">
        <button>{t("navHome")}</button>
      </Link>
      <Link to="/products">
        <button>{t("navProducts")}</button>
      </Link>
      <Link to="/about">
        <button>{t("navAbout")}</button>
      </Link>
      <Link to="/cart">
        <button>{t("navCart")}</button>
      </Link>
    </div>
  );
}

export default Navbar;
