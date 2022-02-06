import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;

    background-color: ${({theme}) => theme.COLORS.SHAPE};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
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

export const BackButton = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const BackIcon = styled(MaterialIcons)``;

export const Content = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 5px;
`;

export const Text = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const WeatherList = styled(FlatList).attrs({
    contentContainerStyle:{
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    showsVerticalScrollIndicator: false
})``;
