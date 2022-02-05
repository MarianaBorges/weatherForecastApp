import React, { useState } from "react";
import { useTheme } from "styled-components/native";

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
    const {COLORS} = useTheme();

    return(
        <Container>
            <Header>
                <CloseButton onPress={() =>{console.log('close button')}}>
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