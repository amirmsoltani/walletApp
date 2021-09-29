import { StatusType } from "../actions/HttpRequestType";
import { AxiosError } from "axios";
import { CoinsMarketType, HoldingType } from "../../dataType";

export type MarketReducerType = {
  holdings: {
    status: StatusType;
    response?: Array<HoldingType>;
    error?: AxiosError;
  };
  coinsMarket: {
    status: StatusType;
    response?: Array<CoinsMarketType>;
    error?: AxiosError;
  };
};
