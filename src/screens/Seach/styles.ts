import styled, { css } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from "react-native";

import { CityProps } from "../../hooks/city";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 65px 16px 16px 16px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const InputContent = styled.View`
    margin-left: 10px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseIcon = styled(Ionicons)``;

export const Content = styled.View`
    flex: 1;
`;

export const CitiesList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding: 20
    },
    showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <CityProps>() => FlatList<CityProps>;