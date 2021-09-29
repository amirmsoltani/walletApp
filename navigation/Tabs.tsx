import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { icons } from "../constants";
import { TabIcon } from "../components";
import { connector, PropType } from "../store/connector/TabsConnector";
import { TouchableOpacity } from "react-native";
import { TabsStyle } from "../styles";

const Tab = createBottomTabNavigator();
const Tabs: React.FC<PropType> = ({ tradeLayoutChanger, isVisible }) => {
  const listeners: any = {
    tabPress(event) {
      isVisible && event.preventDefault();
    }
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: TabsStyle.navigator
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon
              focused={focused}
              icon={icons.home}
              label="Home"
              isVisible={!isVisible}
            />;
          }
        }}
        listeners={listeners}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon
              focused={focused}
              icon={icons.briefcase}
              label="Portfolio"
              isVisible={!isVisible}
            />;
          }
        }}
        listeners={listeners}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon
              focused={focused}
              icon={isVisible ? icons.close : icons.trade}
              iconStyle={isVisible && TabsStyle.closeIcon}
              label="Trade"
              isTrade
            />;
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              style={TabsStyle.tradeButton}
              onPress={() => tradeLayoutChanger(!isVisible)}>
              {
                props.children
              }
            </TouchableOpacity>
          )
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon
              focused={focused}
              icon={icons.market}
              label="Market"
              isVisible={!isVisible}
            />;
          }
        }}
        listeners={listeners}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon
              focused={focused}
              icon={icons.profile}
              label="Profile"
              isVisible={!isVisible}
            />;
          }
        }}
        listeners={listeners}
      />
    </Tab.Navigator>
  );
};

export default connector(Tabs);
