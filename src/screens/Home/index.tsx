import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { 
    Container, 
    Content, 
    Details, 
    Header, 
    HeaderText, 
    SeachIcon,
    Title
} from "./styles";

export function Home(){
    const [cities, setCities] = useState([]);
    const {COLORS} = useTheme();

    return(
        <Container>
            <Header>
                <HeaderText>Cidades</HeaderText>
                <SeachIcon onPress={()=>{console.log('test button')}}>
                    <SeachIcon 
                        name="md-search-sharp" 
                        size={24} 
                        color={COLORS.WHITE} 
                    />
                </SeachIcon>
            </Header>

           { cities.length === 0 &&
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