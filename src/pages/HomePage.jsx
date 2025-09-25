import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcomeTitle")}</h1>
      <p>{t("welcomeText")}</p>
    </div>
  );
}

export default HomePage;
