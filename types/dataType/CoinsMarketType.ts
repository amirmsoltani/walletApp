import { RoiType } from "./RoiType";
import { sparklineType } from "./SparklineType";

export type CoinsMarketType = {
    id:string;
    symbol:string;
    name:string;
    image:string;
    current_price:number;
    market_cap:number;
    market_cap_rank:number;
    fully_diluted_valuation:number;
    total_volume:number;
    high_24h:number;
    low_24h:number;
    price_change_24h:number;
    price_change_percentage_24h:number;
    market_cap_change_24h:number;
    market_cap_change_percentage_24h:number;
    circulating_supply:number;
    total_supply:number;
    max_supply:number;
    ath:number;
    ath_change_percentage:number;
    ath_date:string;
    atl:number;
    atl_change_percentage:number;
    atl_date:string;
    roi:null | RoiType
    last_updated:string;
    sparkline_in_1h?:sparklineType;
    price_change_percentage_1h_in_currency?:number;
    sparkline_in_24h?:sparklineType;
    price_change_percentage_24h_in_currency?:number;
    sparkline_in_7d?:sparklineType;
    price_change_percentage_7d_in_currency?:number;
    sparkline_in_14d?:sparklineType;
    price_change_percentage_14d_in_currency?:number;
    sparkline_in_30d?:sparklineType;
    price_change_percentage_30d_in_currency?:number;
    sparkline_in_200d?:sparklineType;
    price_change_percentage_200d_in_currency?:number;
    sparkline_in_1y?:sparklineType;
    price_change_percentage_1y_in_currency?:number;
}