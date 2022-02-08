import React, { useEffect } from "react";
import { useTheme } from "styled-components/native";
import { useWeather } from "../../hooks/weather";
import { useNavigation, useRoute } from "@react-navigation/native";

import { WeatherWeekCard } from "../../components/WeatherWeekCard";

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

import { DetailsNavigationProps } from "../../@types/navigation";

export function Details(){
    const {COLORS} = useTheme();
    const {fetchWeekWeatherCity, weatherFiveDays} = useWeather();
    const navigation = useNavigation();
    const route = useRoute();
    const { lat,lon, city } = route.params as DetailsNavigationProps;

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect(() => {
        fetchWeekWeatherCity(lat,lon);
    }, []); 

    return(
        <Container>
            <Header>
                <BackButton onPress={handleGoBack}>
                    <BackIcon 
                        name="arrow-back-ios" 
                        size={24} 
                        color={COLORS.WHITE} 
                    />
                </BackButton>
                <HeaderText>
                    {city}
                </HeaderText>
            </Header>

            <Content>
                <Text>Previsão para os próximos 5 dias</Text>
            </Content>
            
            <WeatherList
                data={weatherFiveDays}
                keyExtractor={item => item.dt!}
                renderItem={({item,index}) => <WeatherWeekCard index={index} data={item} />}
            />
        </Container>
    );
}