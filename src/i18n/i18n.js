// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      heroTitle: "Welcome to Our Shop!",
      heroText:
        "We are passionate about providing quality products and excellent service. Our mission is to make your shopping experience simple, fast, and enjoyable.",
      storyTitle: "Our Story",
      storyText:
        "Founded in 2025, our company was created to bring the best products to our customers. We value quality, reliability, and a personal touch in everything we do.",
      valuesTitle: "What We Stand For",
      value1: "High-quality products at fair prices",
      value2: "Fast and reliable shipping",
      value3: "Customer satisfaction is our top priority",
      value4: "Continuous improvement and innovation",
      funTitle: "Did You Know?",
      funText:
        "In our first year, we shipped over 500 packages to happy customers all around the country!",
      navHome: "Home",
      navProducts: "Products",
      navAbout: "About",
      navCart: "Cart",
      addToCart: "Add to Cart",
      back: "Back",
      shoppingcart: "Shopping Cart",
      remove: "Remove",
      total: "Total",
      clearCart: "Clear Cart",
      welcomeTitle: "Welcome to My E-Shop",
      welcomeText:
        "Browse our collection and discover products you’ll love. Add your favorites to the cart and enjoy a smooth shopping experience.",
    },
  },
  fi: {
    translation: {
      heroTitle: "Tervetuloa kauppaamme!",
      heroText:
        "Olemme intohimoisia tarjoamaan laadukkaita tuotteita ja erinomaista palvelua. Tehtävämme on tehdä ostokokemuksestasi yksinkertainen, nopea ja nautittava.",
      storyTitle: "Tarinaamme",
      storyText:
        "Perustettu vuonna 2025, yrityksemme luotiin tuomaan parhaat tuotteet asiakkaillemme. Arvostamme laatua, luotettavuutta ja henkilökohtaista otetta kaikessa, mitä teemme.",
      valuesTitle: "Mitä edustamme",
      value1: "Laadukkaita tuotteita reiluin hinnoin",
      value2: "Nopea ja luotettava toimitus",
      value3: "Asiakastyytyväisyys on meille ensisijainen",
      value4: "Jatkuva parantaminen ja innovaatio",
      funTitle: "Tiesitkö?",
      funText:
        "Ensimmäisenä vuonna lähetimme yli 500 pakettia tyytyväisille asiakkaille ympäri maata!",
      navHome: "Koti",
      navProducts: "Tuotteet",
      navAbout: "Tietoa",
      navCart: "Ostoskori",
      addToCart: "Lisää Ostoskoriin",
      back: "Takaisin",
      shoppingcart: "Ostoskori",
      remove: "Poista",
      total: "Yhteensä",
      clearCart: "Tyhjennä kori",
      welcomeTitle: "Tervetuloa verkkokauppaamme",
      welcomeText:
        "Selaa kokoelmaamme ja löydä tuotteita, joista tulet pitämään. Lisää suosikkisi ostoskoriin ja nauti sujuvasta ostokokemuksesta.",
    },
  },
  et: {
    translation: {
      heroTitle: "Tere tulemast meie poodi!",
      heroText:
        "Meie kirg on pakkuda kvaliteetseid tooteid ja suurepärast teenindust. Meie missioon on muuta teie ostukogemus lihtsaks, kiireks ja nauditavaks.",
      storyTitle: "Meie lugu",
      storyText:
        "Asutatud 2025. aastal, loodi meie ettevõte, et tuua parimad tooted klientideni. Hindame kvaliteeti, usaldusväärsust ja isiklikku puudutust kõiges, mida teeme.",
      valuesTitle: "Mille eest me seisame",
      value1: "Kvaliteetsed tooted õiglastel hindadel",
      value2: "Kiire ja usaldusväärne kohaletoimetamine",
      value3: "Kliendirahulolu on meie peamine prioriteet",
      value4: "Pidev täiustamine ja innovatsioon",
      funTitle: "Kas teadsite?",
      funText:
        "Esimesel aastal saatsime üle 500 paketi õnnelikele klientidele kogu riigis!",
      navHome: "Kodu",
      navProducts: "Tooted",
      navAbout: "Meist",
      navCart: "Ostukorv",
      addToCart: "Lisa Ostukorvi",
      back: "Tagasi",
      shoppingcart: "Ostukorv",
      remove: "Eemalda",
      total: "Kokku",
      clearCart: "Tühjenda ostukorv",
      welcomeTitle: "Tere tulemast minu e-poodi",
      welcomeText:
        "Sirvige meie kollektsiooni ja avastage tooteid, mida armastate. Lisage lemmikud ostukorvi ja nautige sujuvat ostukogemust.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
