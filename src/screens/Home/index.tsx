import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useWeather, WeatherProps } from "../../hooks/weather";

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

import { CityProps } from "../Seach";
import { Load } from "../../components/Load";

type WeatherCityProps = CityProps & WeatherProps;

export function Home(){
    const [cities, setCities] = useState<WeatherCityProps[]>([] as WeatherCityProps[]);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigation = useNavigation();
    const {COLORS} = useTheme();
    const {fetchCurrentWeatherCity} = useWeather();

    function handleNavigationSearchScreen(){
        navigation.navigate('Seach');  
    }  

    function handleNavigationDetailsScreen(id: string){
        navigation.navigate('Details', {id: id});
    }

    async function fetchCurrentWeatherCities(){
        try {
            setIsLoading(true)
            const response = await AsyncStorage.getItem('@RN_weatherForecastApp:cities');
            const storageCities = response ? JSON.parse(response) : [];

            storageCities.map(async (storageCity: CityProps)=>{
               const data = await fetchCurrentWeatherCity(storageCity.latitude,storageCity.longitude);
               return {
                   ...data,
                   ...storageCity
                };
            });
            setCities(storageCities);

        } catch (error) {
            
        }finally{
            setIsLoading(false);
        }
    }
 
    useEffect(()=>{
        fetchCurrentWeatherCities();
    },[])

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