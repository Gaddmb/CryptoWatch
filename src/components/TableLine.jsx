const TableLine = ({ coin, index }) => {
  return (
    <div className="table-line">
      <div className="infos-container">
        <span></span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20 " alt="logo" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>
            - {coin.symbol.toUpperCase().replace("", "-").replace("", "-")}
          </span>
          <a
            target="_blank"
            href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.name}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default TableLine;
