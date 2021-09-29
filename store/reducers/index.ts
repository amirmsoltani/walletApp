import { combineReducers } from "redux";
import LayoutReducers, { initialLayoutReducers } from "./layoutReducer";
import marketReducer, { initialMarketRadiucer } from "./marketReducer";

export const combinedReducers = combineReducers({
  layout: LayoutReducers,
  market: marketReducer,
});

export const initialState = {
  layout: initialLayoutReducers,
  market: initialMarketRadiucer,
};
