import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

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
import { Alert } from "react-native";

export function Home(){
    const [cities, setCities] = useState<CityProps[]>([] as CityProps[]);
    const [isLoading, setIsLoading] = useState(true);
    
    const navigation = useNavigation();
    const {COLORS} = useTheme();

    function handleNavigationSearchScreen(){
        navigation.navigate('Seach');  
    }  

    function handleNavigationDetailsScreen(id: string){
        navigation.navigate('Details', {id: id});
    }
 
    async function fechMyCities(){
        try {
            const response = await AsyncStorage.getItem('@RN_weatherForecastApp:cities');
            const storageCities = response ? JSON.parse(response): [];

            setCities(storageCities);
        } catch (error) {
            Alert.alert('Oops ocorreu um problema ao buscar as cidades.');
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fechMyCities();
    })

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
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            <WeatherCard 
                                data={item}
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