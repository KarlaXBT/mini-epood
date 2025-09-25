import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero / Intro */}
      <h1>{t("heroTitle")}</h1>
      <p>{t("heroText")}</p>

      {/* Our Story */}
      <h2>{t("storyTitle")}</h2>
      <p>{t("storyText")}</p>

      {/* Values / Highlights */}
      <h2>{t("valuesTitle")}</h2>
      <ul>
        <li>{t("value1")}</li>
        <li>{t("value2")}</li>
        <li>{t("value3")}</li>
        <li>{t("value4")}</li>
      </ul>

      {/* Optional Fun Fact */}
      <h2>{t("funTitle")}</h2>
      <p>{t("funText")}</p>
    </div>
  );
}

export default About;
