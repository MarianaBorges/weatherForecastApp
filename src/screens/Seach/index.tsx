import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { 
    Container, 
    Header, 
    CloseButton,
    CloseIcon,
    InputContent,
    Content
} from "./styles";

import { Input } from "../../components/Input";
import { CityCard } from "../../components/CityCard";
import { Load } from "../../components/Load";

export function Seach(){
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();
    const {COLORS} = useTheme();

    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <Container>
            <Header>
                <CloseButton activeOpacity={0.8} onPress={handleGoBack}>
                    <CloseIcon 
                        name="close" 
                        size={24} 
                        color={COLORS.WHITE} 
                    />
                </CloseButton>
                <InputContent>
                    <Input 
                        onChangeText={()=>console.log('teste input')}
                        placeholder="Informe a cidade buscada..."
                        placeholderTextColor={COLORS.WHITE}
                    />
                </InputContent>
            </Header>
            <Content>
                {
                    isLoading 
                    ? <Load/>
                    : <CityCard data={{city: "Floriano", country:"Brasil"}}/>
                }
            </Content>
        </Container>
    )
}