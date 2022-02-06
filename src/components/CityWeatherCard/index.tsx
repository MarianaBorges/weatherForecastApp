import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { 
    Container, 
    Temperature, 
    City, 
    Country, 
    Content,
    ContentDetails,
    AtmosphericConditions,
    TemperatureVariation,
    LikeIconButton,
    LikeIcon
} from "./styles";

export function CityWeatherCard(){
    const [isFavorite, setIsFavorite] = useState(false);
    const {COLORS} = useTheme();

    function handleFavorite(){
        setIsFavorite(prevState => !prevState);
    }

    return(
        <Container>
            <Content>
                <ContentDetails>
                    <City>Floriano</City>
                    <Country>Brazil</Country>
                </ContentDetails>
                <Temperature>
                    18º
                </Temperature>
            </Content>
            <Content>
                <ContentDetails>
                    <AtmosphericConditions>Ensolarado</AtmosphericConditions>
                    <TemperatureVariation>10º - 20º</TemperatureVariation>
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
    )
}