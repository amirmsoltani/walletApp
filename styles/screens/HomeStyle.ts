import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    walletInfo: {
        paddingHorizontal: SIZES.padding,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: COLORS.gray,
    },
    walletInfoBalanceInfo: {
        marginTop: 50
    },
    walletInfoButtons: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: -15,
        paddingHorizontal: SIZES.radius,
    },
    walletInfoButtonsTransfer: {
        flex: 1,
        height: 40,
        marginRight: SIZES.radius,
    },
    walletInfoButtonsWithDraw: {
        flex: 1,
        height: 40
    }

});
