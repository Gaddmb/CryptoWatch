import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStableState } from "../action/stable.action";
import { setListDisplay } from "../action/list.action";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setShowFavList] = useState(false);
  // pour dire a l'action de ce declencher
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [dispatch, showStable, showFavList]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {" "}
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setShowFavList(false)}
        >
          <p>No list</p>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => setShowFavList(true)}
        >
          <p>Favorites list</p>
          <img src="./assets/star-full.svg" alt="icon-star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
