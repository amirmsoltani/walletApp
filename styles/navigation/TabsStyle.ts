import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const TabsStyle = StyleSheet.create({
  navigator: {
    height: 140,
    backgroundColor: COLORS.primary,
    borderTopColor: "transparent"
  },
  tradeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  closeIcon: {
    width: 15,
    height: 15
  }
});
