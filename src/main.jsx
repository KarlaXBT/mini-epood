import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import i18n from "./i18n/i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

//1. T 26.08 - muutujad, tingimused
//2. N 28.08 - tsüklid, objektid
//3. E 01.09 - React algus, navigeerimine
//4. R 05.09 - useState
//5. E 08.09 - kalkulaator, onChange, useRef
//6. R 12.09 - arrays
//7. E 15.09 - lisamine, kustuamine, tabel, faili tõstmine, objektid
//8. R 19.09 - useParams, useNavigate,
//9. E 22.09 - lisatoode, dark/light, tõlge, localStorage,,
//10. R 26.09 - kokkuarvutus, otsing, kogus ostukorvis, API
//11. E 29.09 - makse API
// Enne reedet 03.10 panna Firebase serverisse üles
//12. R 03.10 - emaili saatmine, kaardirakendus,  Bootstrap,MUI/Tailwind,
//13. E 06.10 - CSS loaders, toastify popups, context
// https://start.spring.io/#!type=maven-project&language=java&platformVersion=3.5.6&packaging=jar&jvmVersion=21&groupId=ee.kaarel&artifactId=backend&name=backend&description=Backend%20for%20Webshop&packageName=ee.kaarel.backend&dependencies=lombok,web,data-jpa,h2,postgresql
//14. R 10.10 - back-end, jäta postgresSQL parool meelde
// addimise ja kustutamise leht(tabelist kustutada)
//15. E 13.10 - võtmine ack-endist, lisamine back-endi, kustutamine
//16. L 18.10
//17. DISAINER
//18. 06.11 R 09.00-10-30 lõpuprojekti esitlemine

//front-end
//back-end
//cloud: virtualiseerimine (Docker, Kuberneters), caches (Redis)
//arhitekt
