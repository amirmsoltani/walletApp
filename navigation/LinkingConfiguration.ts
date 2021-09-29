/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Home: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: "home"
            }
          },
          Portfolio: {
            screens: {
              TabTwoScreen: "portfolio"
            }
          },
          Trade: {
            screens: {
              TabTwoScreen: "trade"
            }
          },
          Market: {
            screens: {
              TabTwoScreen: "market"
            }
          },
          Profile: {
            screens: {
              TabTwoScreen: "profile"
            }
          }
        }
      },
      NotFound: "*"
    }
  }
};
