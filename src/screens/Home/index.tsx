import React, { useEffect } from "react";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useCity } from "../../hooks/city";

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
import { Load } from "../../components/Load";

export function Home(){
    const navigation = useNavigation();
    const {cities, isLoading, fechMyCities, updatedFavoriteCity} = useCity();
    const {COLORS} = useTheme();

    function handleNavigationSearchScreen(){
        navigation.navigate('Seach');  
    }  

    function handleNavigationDetailsScreen(lat: string, lon: string, city: string){
        navigation.navigate('Details', {lat: lat, lon: lon, city: city});
    }
 
    async function handleFavoriteToggle(id: string){
        await updatedFavoriteCity(id);
    }
   

    useEffect(()=>{
        fechMyCities();
    })

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
                isLoading ? <Load/> :

                    cities.length > 0
                    ?
                    <CitiesList
                        data={cities}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            <WeatherCard 
                                data={item}
                                changeFavorite={()=>handleFavoriteToggle(item.id)}
                                onPress={() => handleNavigationDetailsScreen(item.latitude, item.longitude, item.city)} 
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