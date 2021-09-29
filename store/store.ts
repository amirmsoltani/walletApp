import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combinedReducers, initialState } from "./reducers";
import SagaMiddleware, { AppSaga } from "./sagas";
import {composeWithDevTools} from 'redux-devtools-extension';

//middlewares array
const middlewares = [];

//thunk middleware
middlewares.push(thunk);

//saga middleware
middlewares.push(SagaMiddleware);

//create store method
export const storeCreator = () => {
  //create store
  const store = createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  //run app saga after create sore
  SagaMiddleware.run(AppSaga);

  return store;
};
