import { LayoutReducerType, MarketReducerType } from "./reducers";

export interface StoreType  {
  layout: LayoutReducerType;
  market: MarketReducerType;
};
