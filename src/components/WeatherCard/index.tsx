import React, { useState } from "react";
import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler";
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
    LikeIcon,
    Button
} from "./styles";

type Props = RectButtonProps & {
    favorite?: boolean; 
}

export function WeatherCard({favorite = false, ...rest}: Props){
    const [isFavorite, setIsFavorite] = useState(false);
    const {COLORS} = useTheme();

    function handleFavorite(){
        setIsFavorite(prevState => !prevState);
    }

    return(

        <GestureHandlerRootView>
        <Container>
            <Button {...rest}>
                <ContentDetails>
                    <Title>Floriano</Title>
                    <Text>Brazil</Text>
                </ContentDetails>
                <Temperature>
                    18º
                </Temperature>
            </Button>
            
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
        </GestureHandlerRootView>
    )
}