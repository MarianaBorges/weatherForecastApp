import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

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

import { WeatherCard } from "../../components/WeatherCard";

export function Home(){
    const [cities, setCities] = useState(['1','2','3']);
    
    const navigation = useNavigation();
    const {COLORS} = useTheme();

    function handleNavigationSearchScreen(){
        navigation.navigate('Seach');
    }

    function handleNavigationDetailsScreen(id: string){
        navigation.navigate('Details', {id: id});
    }

    return(
        <Container>
            <Header>
                <HeaderText>Cidades</HeaderText>
                <SeachIcon onPress={handleNavigationSearchScreen}>
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
                    renderItem={({item}) => 
                        <WeatherCard 
                            onPress={() => handleNavigationDetailsScreen(String(item))} 
                            favorite={true}
                        />}
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