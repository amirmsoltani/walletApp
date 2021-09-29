import React from "react";
import { View, Animated } from "react-native";
import { MainLayoutType } from "../types";
import { connector } from "../store/connector/TabsConnector";
import { MainLayoutStyle } from "../styles";
import { IconTextButton } from "../components";
import { icons, SIZES } from "../constants";

const MainLayout: MainLayoutType = ({
  children,
  isVisible,
  tradeLayoutChanger,
}) => {
  // modal animate refrence
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  // modal interpolate
  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280],
  });
  // modal animate effect
  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible]);

  return (
    <View style={MainLayoutStyle.container}>
      {children}

      {/* Dim Background */}
      {isVisible && (
        <Animated.View
          style={[
            MainLayoutStyle.dimBackground,
            { opacity: modalAnimatedValue },
          ]}
        />
      )}

      {/*Modal */}
      <Animated.View style={[MainLayoutStyle.modal, { top: modalY }]}>
        <IconTextButton
          lable="transfer"
          icon={icons.send}
          onPress={() => console.log("trasfer")}
        />
        <IconTextButton
          lable="Withdraw"
          icon={icons.withdraw}
          containerStyle={MainLayoutStyle.withdraw}
          onPress={() => console.log("withdraw")}
        />
      </Animated.View>
    </View>
  );
};

export default connector(MainLayout);
