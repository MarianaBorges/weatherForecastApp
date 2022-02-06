import React from "react";
import { useTheme } from "styled-components/native";

import { WeatherCard } from "../../components/WeatherCard";

import { 
    Container, 
    Header, 
    HeaderText,
    BackButton,
    BackIcon,
    WeatherList,
    Content,
    Text
} from "./styled";

export function Details(){
    const {COLORS} = useTheme();
    return(
        <Container>
            <Header>
                <BackButton>
                    <BackIcon 
                        name="arrow-back-ios" 
                        size={24} 
                        color={COLORS.WHITE} 
                    />
                </BackButton>
                <HeaderText>
                    Floriano
                </HeaderText>
            </Header>

            <Content>
                <Text>Previsão para os próximos 5 dias</Text>
            </Content>
            
            <WeatherList
                data={['1','2','3','4','5']}
                renderItem={() => <WeatherCard />}
            />
        </Container>
    );
}