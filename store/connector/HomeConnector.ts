import { connect, ConnectedProps } from "react-redux";
import { StoreType } from "../../types";
import { getHoldings, getCoinsMarket } from "../index";

export const mapStateToProps = (store: StoreType) => ({
  holdings: store.market.holdings,
  coinsMarket: store.market.coinsMarket,
});

export const mapDispatchToProps = {
  getHoldings,
  getCoinsMarket,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropType = ConnectedProps<typeof connector>;
