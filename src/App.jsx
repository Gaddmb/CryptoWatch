import axios from "axios";
import GlobalChart from "./components/GlobalChart";
import HearderInfos from "./components/hearderInfos";
import Table from "./components/Table";
import React, { useState, useEffect } from "react";
import ToTop from "./components/ToTop";
const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`
      )
      .then((res) => {
        setCoinsData(res.data);
      });

    // rappel : je fais du pure JS et je dis que si la page est scrollé de plus de 145px alors j'ajoute la classe active a la table-header sinon je l'enlève
    window.addEventListener("scroll", () => {
      if (window.scrollY > 145) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="app-container">
      <header>
        <HearderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
      <ToTop />
    </div>
  );
};

export default App;

// je vais passé les données a apps pour les passer a GlobalChart mais aussi au tableau d'en dessous
