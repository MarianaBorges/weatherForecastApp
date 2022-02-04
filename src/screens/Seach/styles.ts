import styled, { css } from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 45px 16px 16px 16px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;