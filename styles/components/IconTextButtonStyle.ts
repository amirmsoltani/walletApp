import { StyleSheet } from "react-native";
import { COLORS, FONTS,SIZES } from "../../constants";

export const IconTextButtonStyle = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    height:50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.secondary
  },
  text: {
    marginLeft:SIZES.base,
    ...FONTS.h3,
  },
});
