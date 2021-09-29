import { HoldingType } from "../../../dataType";
import { HTTPRequestActionType } from "../HttpRequestType";

export type GetHoldingPropertyType = {
  holdings?: HoldingType[];
  currency?: string;
  orderBy?: string;
  sparkline?: boolean;
  priceChangePerc?: string;
  perPage?: number;
  page?: number;
};

export type GetHoldingsActionType = (
  property: GetHoldingPropertyType
) => HTTPRequestActionType<"market", "GET">;
