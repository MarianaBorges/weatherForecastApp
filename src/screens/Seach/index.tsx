import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { 
    Container, 
    Header, 
} from "./styles";

import { Input } from "../../components/Input";

export function Seach(){
    const [city, setCity] = useState('');
    const {COLORS} = useTheme();

    return(
        <Container>
            <Header>
                <Input 
                    value={city}
                    onChangeText={()=>console.log('teste input')}
                    placeholder="Informe a cidade buscada..."
                    placeholderTextColor={COLORS.WHITE}/>
            </Header>
        </Container>
    )
}