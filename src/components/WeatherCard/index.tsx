import React, { useState, useEffect } from "react";
import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler";

import { useTheme } from "styled-components/native";
import { useWeather, WeatherProps } from "../../hooks/weather";

import { CityProps } from "../../hooks/city";

import { 
    Container, 
    Temperature, 
    Title, 
    Text, 
    Content,
    ContentDetails,
    AtmosphericConditions,
    TemperatureVariation,
    LikeIconButton,
    LikeIcon,
    Button
} from "./styles";

type Props = RectButtonProps & {
    data: CityProps;
    favorite?: boolean; 
    changeFavorite: (id: string) => Promise<void>;
}

export function WeatherCard({
    data,
    favorite = false,
    changeFavorite, 
    ...rest}
: Props){

    const [isFavorite, setIsFavorite] = useState(data.isFavorite);
    const [weatherForecast, setWeatherForecast] = useState<WeatherProps>();

    const {COLORS} = useTheme();
    const {fetchCurrentWeatherCity} = useWeather()

    function handleFavorite(){
        setIsFavorite(prevState => !prevState);
        changeFavorite(data.id);
    }

    async function handleWeatherForecast(){
        const response = await fetchCurrentWeatherCity(data.latitude,data.longitude);
        setWeatherForecast(response);
    }

    useEffect(()=>{
        handleWeatherForecast();
    },[])

    if(!weatherForecast)
        return <></>

    return(

        <GestureHandlerRootView>
        <Container>
            <Button {...rest}>
                <ContentDetails>
                    <Title>{data.city}</Title>
                    <Text>{data.estate}, {data.country}</Text>
                </ContentDetails>
                <Temperature>
                    {weatherForecast!.temperature}º
                </Temperature>
            </Button>
            
            <Content>
                <ContentDetails>
                    <AtmosphericConditions>{weatherForecast.weather}</AtmosphericConditions>
                    <TemperatureVariation>{weatherForecast.minimum}º - {weatherForecast.maximum}º</TemperatureVariation>
                </ContentDetails>
                <LikeIconButton 
                    activeOpacity={0.9} 
                    onPress={handleFavorite}
                >
                    {
                        isFavorite
                        ? 
                        <LikeIcon 
                            name="heart" 
                            size={22} 
                            color={COLORS.PINK} 
                        />
                        :
                        <LikeIcon 
                            name="hearto" 
                            size={22} 
                            color={COLORS.PINK} 
                       />
                    }
                </LikeIconButton>
            </Content>
        </Container>
        </GestureHandlerRootView>
    )
}