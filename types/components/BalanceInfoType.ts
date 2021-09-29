import {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';


export type BalanceInfoType = FC<{
    title: string;
    displayAmount: number;
    changePct: number;
    containerStyle?: StyleProp<ViewStyle>
}>
