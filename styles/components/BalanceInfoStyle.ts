import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from "../../constants";


export const BalanceInfoStyle = StyleSheet.create({
    title: {
        color: COLORS.lightGray3,
        ...FONTS.h3
    },

    figures: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    figuresCurrencyIcon: {
        ...FONTS.h3,
        color: COLORS.white,
    },

    figuresAmount: {
        ...FONTS.h2,
        marginLeft: SIZES.base,
        color: COLORS.white
    },

    figuresCurrency: {
        color: COLORS.lightGray3,
        ...FONTS.h3
    },

    changePercentage: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    changePercentageIcon: {
        height: 10,
        width: 10,
        alignSelf: 'center',
    },
    changePercentageIconUp: {
        tintColor: COLORS.lightGreen,
        transform: [{rotate: '45deg'}]
    },
    changePercentageIconDown: {
        tintColor: COLORS.red,
        transform: [{rotate: '125deg'}]
    },
    changePercentageText: {
        marginLeft: SIZES.base,
        alignSelf: 'flex-end',
        color: COLORS.lightGray3,
        ...FONTS.h4
    },
    changePercentageTextUp: {
        color: COLORS.lightGreen
    },
    changePercentageTextDown: {
        color: COLORS.red
    },
    changePercentageLabel: {
        marginLeft: SIZES.radius,
        alignSelf: 'flex-end',
        color: COLORS.lightGreen,
        ...FONTS.h5
    }

});
