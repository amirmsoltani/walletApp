import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const MainLayoutStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    position: "absolute",
    left: 0,
    width: "100%",
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
  },
  withdraw: {
    marginTop: SIZES.base,
  },
  dimBackground:{
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      backgroundColor:COLORS.transparentBlack
  }
});
