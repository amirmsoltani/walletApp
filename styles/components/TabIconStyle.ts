import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

export const TabIconStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  tradeContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.black
  },
  image: {
    width: 25,
    height: 25,
    tintColor: COLORS.secondary
  },
  text: {
    color: COLORS.secondary,
    ...FONTS.h4
  },
  normalImage: { tintColor: COLORS.white },
  normalText: { color: COLORS.white },
  invisible: { display: "none" }
});
