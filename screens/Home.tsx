import React from "react";
import {View, Text} from "react-native";
import {dummyData, icons} from "../constants";
import {MainLayout} from "../layouts";
import {connector, PropType} from "../store/connector/HomeConnector";
import {useFocusEffect} from "@react-navigation/native";
import {HomeStyle} from "../styles";
import {BalanceInfo, IconTextButton} from "../components";

const Home: React.FC<PropType> = ({getHoldings, holdings}) => {
    useFocusEffect(
        React.useCallback(() => {
            getHoldings({holdings: dummyData.holdings});
        }, [])
    );

    const totalWallet = holdings.response?.reduce((a, b) => a + (b.total || 0), 0) || 0;
    // TODO after finish version1 change static 7d to dynamic value
    const valueChange = holdings.response?.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0) || 0;
    const percentChange = valueChange / (totalWallet - valueChange);

    return (
        <MainLayout>
            <View style={HomeStyle.container}>

                {/* Header - Wallet Info  */}
                <View style={HomeStyle.walletInfo}>
                    {/*Balance Info*/}
                    <BalanceInfo title={'Your Wallet'}
                                 displayAmount={totalWallet}
                                 changePct={percentChange}
                                 containerStyle={HomeStyle.walletInfoBalanceInfo}/>
                    {/*Buttons*/}
                    <View style={HomeStyle.walletInfoButtons}>
                        <IconTextButton onPress={() => console.log('transfer')}
                                        lable={'Transfer'}
                                        icon={icons.send}
                                        containerStyle={HomeStyle.walletInfoButtonsTransfer}
                        />
                        <IconTextButton onPress={() => console.log('withdraw')}
                                        lable={'Withdraw'}
                                        icon={icons.withdraw}
                                        containerStyle={HomeStyle.walletInfoButtonsWithDraw}
                        />
                    </View>
                </View>
                {/* Chart */}

                {/* Top Cryptocurrency */}
            </View>
        </MainLayout>
    );
};

export default connector(Home);
