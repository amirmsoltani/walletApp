import {
  HTTP_REQUEST,
  HTTP_REQUEST_FAILURE,
  HTTP_REQUEST_SUCCESS,
  MarketActionsType,
  MarketReducerType,
} from "../../types";

export const initialMarketRadiucer: MarketReducerType = {
  holdings: {
    status: "idle",
  },
  coinsMarket: {
    status: "idle",
  },
};

export default (
  store = initialMarketRadiucer,
  action: MarketActionsType
): MarketReducerType => {
  switch (action.type) {
    case HTTP_REQUEST:
      if (action.payload.reducer !== "market") return store;
      return {
        ...store,
        [action.payload.target]: {
          ...store[action.payload.target],
          status: "loading",
        },
      };
    case HTTP_REQUEST_SUCCESS:
      if (action.payload.reducer !== "market") return store;
      return {
        ...store,
        [action.payload.target]: {
          status: "success",
          response: action.payload.response,
        },
      };
    case HTTP_REQUEST_FAILURE:
      if (action.payload.reducer !== "market") return store;
      return {
        ...store,
        [action.payload.target]: {
          status: "failure",
          error: action.payload.error,
        },
      };
    default:
      return store;
  }
};
