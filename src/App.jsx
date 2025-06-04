import axios from "axios";
import GlobalChart from "./components/GlobalChart";
import HearderInfos from "./components/hearderInfos";
import Table from "./components/Table";
import React, { useState, useEffect } from "react";
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
  }, []);

  return (
    <div className="app-container">
      <header>
        <HearderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
    </div>
  );
};

export default App;

// je vais passé les données a apps pour les passer a GlobalChart mais aussi au tableau d'en dessous
