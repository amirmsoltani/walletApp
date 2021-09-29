import { TRADE_LAYOUT_CHANGER, TradeLayoutChangerType } from "../../../types";

export const tradeLayoutChanger = (isVisible: boolean): TradeLayoutChangerType => ({
  type: TRADE_LAYOUT_CHANGER,
  payload: { isVisible }
});
