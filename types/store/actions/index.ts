import * as layout from "./layout";
import {
  HTTPRequestActionType,
  HTTPRequestSuccessActionType,
  HTTPRequestFailureActionType,
} from "./HttpRequestType";

// reducers all  action type export here
export type LayoutActionsType =
  | layout.TradeLayoutChangerType
  | HTTPRequestActionType<"market">
  | HTTPRequestFailureActionType<"market">
  | HTTPRequestSuccessActionType<"market">;
export type MarketActionsType =
  | HTTPRequestActionType<"market">
  | HTTPRequestFailureActionType<"market">
  | HTTPRequestSuccessActionType<"market">;

export * from "./HttpRequestType";
export * from "./layout";
export * from "./market";
