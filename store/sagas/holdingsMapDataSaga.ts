import {takeEvery, put} from "redux-saga/effects";
import {
    HTTPRequestMapDataActionType,
    HTTP_REQUEST_MAP_DATA,
    HTTP_REQUEST_SUCCESS,
} from "../../types";
import {CoinsMarketType, HoldingType} from "../../types/dataType";

function* holdingsMapDataSaga(
    action: HTTPRequestMapDataActionType<"market", CoinsMarketType[]>
) {
    if (
        action.payload.reducer !== "market" &&
        action.payload.target !== "holdings"
    )
        return;

    const {holdings, priceChangePerc} = action.payload.property! as {
        holdings: HoldingType[];
        priceChangePerc: string;
    };

    const newResponse = action.payload.response.map((coinMakret) => {
        // Retrieve our current holdings -> current
        //quantity
        const coin = holdings.find((holding) => holding.id === coinMakret.id);

        //price from 7 days ago
        const priceChange =
            coinMakret.current_price /
            (1 +
                coinMakret[`price_change_percentage_${priceChangePerc}_in_currency`]);

        return {
            id: coinMakret.id,
            symbol: coinMakret.symbol,
            name: coinMakret.name,
            image: coinMakret.image,
            current_price: coinMakret.current_price,
            qty: coin.qty,
            total: coin.qty * coinMakret.current_price,
            [`price_change_percentage_${priceChangePerc}_in_currency`]:
                coinMakret[`price_change_percentage_${priceChangePerc}_in_currency`],
            [`holding_value_change_${priceChangePerc}`]:
            (coinMakret.current_price - priceChange) * coin.qty,
            [`sparkline_in_${priceChangePerc}`]: {
                value: coinMakret[`sparkline_in_${priceChangePerc}`].price.map(
                    (price) => price * coin.qty
                ),
            },
        };
    });
    yield put({
        type: HTTP_REQUEST_SUCCESS,
        payload: {
            response: newResponse,
            reducer: action.payload.reducer,
            target: action.payload.target,
        },
    });
}

export default takeEvery(HTTP_REQUEST_MAP_DATA, holdingsMapDataSaga);
