import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 130px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
 
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.WHITE};

    box-shadow: 10px 10px 5px;
    elevation: 5;
`;

export const Content = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ContentDetails = styled.View``;

export const Temperature = styled.Text`
    font-size: 26px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.ORANGE};
    `}
`;

export const Title = styled.Text`
    font-size: 20px;
    text-transform: capitalize;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const Text = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.TEXT};
`}
`;

export const AtmosphericConditions = styled.Text`
    font-size: 14px;
    text-transform: capitalize;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.ORANGE};
    `};
`;

export const TemperatureVariation = styled.Text`
    font-size: 12px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.TEXT};
    `};
`;
