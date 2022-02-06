import React, { useState } from "react";
import { useTheme } from "styled-components/native";

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
    LikeIcon
} from "./styles";

type Props = {
    favorite?: boolean; 
}

export function WeatherCard({favorite = false}: Props){
    const [isFavorite, setIsFavorite] = useState(false);
    const {COLORS} = useTheme();

    function handleFavorite(){
        setIsFavorite(prevState => !prevState);
    }

    return(
        <Container>
            <Content>
                <ContentDetails>
                    <Title>Floriano</Title>
                    <Text>Brazil</Text>
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
                {   
                    favorite &&
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
                }
            </Content>
        </Container>
    )
}