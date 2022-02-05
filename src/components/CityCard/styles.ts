import styled, { css } from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    box-shadow: 10px 10px 5px;
    elevation: 5;
`;

export const Content = styled.View`
    padding: 15px;
`;

export const City = styled.Text`
    font-size: 20px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const Country = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.TEXT};
`}
`;

export const AddButton = styled.TouchableOpacity`

    width: 50px;
    height: 100%;
    background-color: ${({theme}) => theme.COLORS.BLUE};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const AddIcon = styled(MaterialIcons)``;