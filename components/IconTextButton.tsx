import React from "react";

import { Text, TouchableOpacity, Image } from "react-native";
import { IconTextButtonStyle } from "../styles";
import { IconTextButtonType } from "../types";

const IconTextButton: IconTextButtonType = ({ icon, onPress, containerStyle, children, lable }) => {
  return (
    <TouchableOpacity
      style={[IconTextButtonStyle.container, containerStyle]}
      onPress={onPress}
    >
      <Image style={IconTextButtonStyle.image} source={icon} />
      <Text style={IconTextButtonStyle.text}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
