import styled, { css } from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 65px 16px 16px 16px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const HeaderText = styled.Text`
    font-size: 20px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.WHITE};
    `}
`;

export const SeachButton = styled(BorderlessButton)``;

export const SeachIcon = styled(Ionicons)``;

export const Content = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const Details = styled.Text`
    font-size: 16px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.TEXT};
    `}
`;

export const CitiesList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding: 20,
    },
    showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <CityProps>() => FlatList<CityProps>;;