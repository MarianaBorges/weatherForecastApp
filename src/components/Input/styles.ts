import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    width: 100%;
    font-size: 20px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.WHITE};
    `}
`;