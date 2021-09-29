import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import HTTPRequestSaga from "./HTTPRequestSaga";
import holdingsMapDataSaga from "./holdingsMapDataSaga";

export function* AppSaga() {
  yield all([HTTPRequestSaga, holdingsMapDataSaga]);
}

export default createSagaMiddleware();
