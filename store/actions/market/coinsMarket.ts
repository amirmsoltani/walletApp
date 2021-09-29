import { GetCoinsMarketActionType, HTTP_REQUEST } from "../../../types";
import { COINS_MARKETS_URL } from "../../../URLS";

export const getCoinsMarket: GetCoinsMarketActionType = ({
  currency = "usd",
  orderBy = "market_cap_desc",
  sparkline = true,
  priceChangePerc = "7d",
  perPage = 10,
  page = 1,
}) => {
  const url =
    COINS_MARKETS_URL +
    `?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`;
  return {
    type: HTTP_REQUEST,
    payload: {
      reducer: "market",
      target: "coinsMarket",
      method: "GET",
      url: url,
    },
  };
};
