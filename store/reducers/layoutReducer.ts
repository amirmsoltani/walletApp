import { LayoutActionsType, LayoutReducerType, TRADE_LAYOUT_CHANGER } from "../../types";

export const initialLayoutReducers: LayoutReducerType = { tradeLayout: { isVisible: false } };

export default (store: LayoutReducerType = initialLayoutReducers, action: LayoutActionsType) => {
  switch (action.type) {
    case TRADE_LAYOUT_CHANGER:
      return { ...store, tradeLayout: { ...store.tradeLayout, isVisible: action.payload.isVisible } };
    default:
      return store;
  }
}
