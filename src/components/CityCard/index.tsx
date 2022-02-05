import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { 
    Container, 
    Content,
    City, 
    Country, 
    AddButton, 
    AddIcon 
} from "./styles";

type CityProps = {
    city: string;
    country: string;
}

type Props = TouchableOpacityProps & {
    data: CityProps;
}

export function CityCard({data, ...rest}: Props){
    const {COLORS} = useTheme();

    return (
        <Container>
            <Content>
                <City>{data.city}</City>
                <Country>{data.country}</Country>
            </Content>

            <AddButton 
                activeOpacity={0.8} 
                {...rest}
            >
                <AddIcon 
                    name="add" 
                    size={26} 
                    color={COLORS.WHITE} 
                />
            </AddButton>
        </Container>
    )
}