import React from "react";
import { View, Text, Image } from "react-native";

import { TabIconStyles } from "../styles";
import { TabIconType } from "../types";

const TabIcon: TabIconType = ({ focused, icon, iconStyle, label, isTrade, isVisible }) => {
  return <View style={[
    TabIconStyles.container,
    isTrade && TabIconStyles.tradeContainer,
    !isVisible && TabIconStyles.invisible]}>
    <Image
      source={icon}
      style={[TabIconStyles.image, (focused || isTrade) && TabIconStyles.normalImage, iconStyle]}
    />
    <Text style={[TabIconStyles.text, (focused || isTrade) && TabIconStyles.normalText]}>
      {label}
    </Text>
  </View>;
};

TabIcon.defaultProps = {
  isVisible: true
};
export default TabIcon;
