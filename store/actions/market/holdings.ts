import { GetHoldingsActionType, HTTP_REQUEST } from "../../../types";
import { COINS_MARKETS_URL } from "../../../URLS";

export const getHoldings: GetHoldingsActionType = ({
  holdings = [],
  currency = "usd",
  orderBy = "market_cap_desc",
  sparkline = true,
  priceChangePerc = "7d",
  perPage = 10,
  page = 1,
}) => {
  const ids = holdings.map((item) => item.id).join(",");
  const url =
    COINS_MARKETS_URL +
    `?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`;
  return {
    type: HTTP_REQUEST,
    payload: {
      reducer: "market",
      target: "holdings",
      method: "GET",
      url: url,
      mapData: true,
      property: { holdings, priceChangePerc },
    },
  };
};
