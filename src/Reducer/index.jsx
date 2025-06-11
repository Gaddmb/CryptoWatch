import { combineReducers } from "redux";
// Ce fichier va peremtre de regrouper tous les reducers ( pas les actions)
import stableReducer from "./stable.reducer";
const rootReducer = combineReducers({
  stableReducer,
});

export default rootReducer;
