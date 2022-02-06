import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { 
    Container, 
    Content, 
    Details, 
    Header, 
    HeaderText, 
    SeachIcon,
    Title,
    CitiesList
} from "./styles";

import { CityWeatherCard } from "../../components/CityWeatherCard";

export function Home(){
    const [cities, setCities] = useState(['1','2','3']);
    const {COLORS} = useTheme();

    return(
        <Container>
            <Header>
                <HeaderText>Cidades</HeaderText>
                <SeachIcon onPress={()=>{console.log('test button')}}>
                    <SeachIcon 
                        name="md-search-sharp" 
                        size={24} 
                        color={COLORS.WHITE} 
                    />
                </SeachIcon>
            </Header>

            { 
                cities.length > 0
                ?
                <CitiesList
                    data={cities}
                    keyExtractor={item => item}
                    renderItem={({item}) => <CityWeatherCard />}
                />
                :                
                    <Content>
                    <Title>
                        Parece que você ainda não {'\n'}
                        adicionou uma cidade
                    </Title>
                    <Details>
                        Tente adicionar uma cidade usando o {'\n'}
                        botão de busca
                    </Details>
                    </Content>
            }
        </Container>
    )
}