import { HTTPRequestActionType } from "../HttpRequestType";

export type GetCoinsMarketPropertyType = {
  currency?: string;
  orderBy?: string;
  sparkline?: boolean;
  priceChangePerc?: string;
  perPage?: number;
  page?: number;
};

export type GetCoinsMarketActionType = (
  property: GetCoinsMarketPropertyType
) => HTTPRequestActionType<"market", "GET">;
