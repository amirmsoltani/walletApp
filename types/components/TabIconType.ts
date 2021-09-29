import { FC } from "react";
import { StyleProp, ImageStyle} from "react-native";

export type TabIconType = FC<{
  focused: boolean;
  label: string;
  isTrade?: boolean;
  icon: number;
  iconStyle?: StyleProp<ImageStyle>;
  isVisible?:boolean;
}>
