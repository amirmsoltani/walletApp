import React from 'react'
import {View, Text, Image} from 'react-native';
import {BalanceInfoType} from "../types";
import {BalanceInfoStyle} from "../styles";
import {icons} from "../constants";


const BalanceInfo: BalanceInfoType = ({changePct, containerStyle, displayAmount, title}) => {

    return (
        <View style={containerStyle}>
            {/*Title*/}
            <Text style={BalanceInfoStyle.title}>{title}</Text>

            {/*Figures*/}
            <View style={BalanceInfoStyle.figures}>
                <Text style={BalanceInfoStyle.figuresCurrencyIcon}>
                    $
                </Text>
                <Text style={BalanceInfoStyle.figuresAmount}>
                    {displayAmount.toLocaleString()}
                </Text>
                <Text style={BalanceInfoStyle.figuresCurrency}>
                    USD
                </Text>
            </View>

            {/*Change Percentage*/}
            <View style={BalanceInfoStyle.changePercentage}>
                {
                    changePct && <Image source={icons.upArrow}
                                        style={
                                            [BalanceInfoStyle.changePercentageIcon,
                                                changePct > 0
                                                    ? BalanceInfoStyle.changePercentageIconUp
                                                    : BalanceInfoStyle.changePercentageIconDown]
                                        }/>
                }
                <Text style={[BalanceInfoStyle.changePercentageText,
                    changePct && (changePct > 0
                        ? BalanceInfoStyle.changePercentageTextUp
                        : BalanceInfoStyle.changePercentageTextDown)]}>
                    {changePct.toFixed(2)}%
                </Text>
                <Text style={BalanceInfoStyle.changePercentageLabel}>
                    7d change
                </Text>
            </View>
        </View>
    )

};

export default BalanceInfo;
