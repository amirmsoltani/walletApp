import { connect,ConnectedProps } from "react-redux";
import { StoreType } from "../../types";
import { tradeLayoutChanger } from "../index";

export const mapStateToProps = (store: StoreType) => ({
  isVisible: store.layout.tradeLayout.isVisible
});


export const mapDispatchToProps = {
  tradeLayoutChanger: tradeLayoutChanger
};

export const connector = connect(mapStateToProps,mapDispatchToProps);


export type PropType = ConnectedProps<typeof connector>
