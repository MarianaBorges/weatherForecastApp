import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    position: absolute;
    bottom: 25px;
    right: 10px;
`;

export const Button = styled(TouchableOpacity)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    elevation: 8;

    background-color: ${({theme})=> theme.COLORS.BLUE};
`;

export const SeachIcon = styled(Ionicons)``;