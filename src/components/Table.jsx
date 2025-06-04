import React, { useState } from "react";
import TableLine from "./TableLine";
const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("");

  //tableaHeader ici me permet de créer les entêtes de mon tableau ou je ferais un map pour les afficher
  const tableHeader = [
    "Price",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
          {/*  les deux input sont connecté car grace a la valeur de rangeNumber */}
        </div>
        {/* je parcours le tableau tableHeader pour créer les entêtes de mon
        tableau */}
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              // ici l'id et utilisé pour relier l'input ( bouton ) et le label
              id={el}
              // je me dis que si el ( exemple "Prix" ) est égal a orderBy
              // ou si el est égal a orderBy + "reverse" ( exemple "Prixreverse" ) alors on coche ce bouton ( checked )
              //   reverse est juste un mot que j'ai choisi dans mon code pour indiquer que le tri est inversé (ex: "Prixreverse")
              defaultChecked={
                el === orderBy || el === orderBy + "reverse" ? true : false
              }
              // le onClick permet de changer l'état de orderBy  exemeple la valeur el (ex: "Prix") est stockée dans orderBy
              onClick={() => {
                // Si l’utilisateur clique plusieurs fois sur le même bouton, je fais alterner le tri entre ordre normal et ordre inverse.
                if (orderBy === el) {
                  setOrderBy(el + "reverse");
                } else if (orderBy === el + "reverse") {
                  setOrderBy(el);
                }
              }}
            />
            {/* ne pas oublie que htmlFor est l'id de l'input */}
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {coinsData &&
        coinsData
          .slice(0, rangeNumber)
          .map((coin, index) => <TableLine coin={coin} index={index} />)}
    </div>
  );
};

export default Table;
