import { FC } from "react";
import { StyleProp, ViewStyle, GestureResponderEvent } from "react-native";

export type IconTextButtonType = React.FC<{
  containerStyle?: StyleProp<ViewStyle>,
  onPress: (GestureResponderEvent) => void;
  lable: string,
  icon: number
}>
