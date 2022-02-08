import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useCity, CityProps } from "../../hooks/city";

import { 
    Container, 
    Header, 
    CloseButton,
    CloseIcon,
    InputContent,
    Content,
    CitiesList
} from "./styles";

import { Input } from "../../components/Input";
import { CityCard } from "../../components/CityCard";
import { Load } from "../../components/Load";

import apiMapBox from "../../services/apiMapBox";

type ResponseMapBoxProps = {
    context: [
      {
        text: string;
      },
      {
        text: string;
      }
    ];
    geometry:{
      coordinates: [
          number,
          number
        ];
      type: string;
    };
    id: string;
    text: string;
}

const TOKEN = 'access_token=pk.eyJ1IjoibWFyaWFuYW1ib3JnZXMiLCJhIjoiY2t6Y3R4MXh0Mm9lNjJ2cDRvcGo0ODJsaiJ9.hCa1jQvoYhIIHhyY9JmW6Q'
const CITY_COLLECTION = '@RN_weatherForecastApp:cities';

export function Seach(){
    const [cities, setCities] = useState<CityProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();
    const {COLORS} = useTheme();

    function handleGoBack(){
        navigation.goBack();
    }

    async function fetchLocalMapBox(city: string){
        try {
            setIsLoading(true);
            const response = await apiMapBox.get(`${city}.json?types=place&${TOKEN}`);
            const data = response.data.features;
            const dataFormatted: CityProps[] = data
                .map((item:ResponseMapBoxProps)=>{
                    const newItem = {
                        id: item.id,
                        estate: item.context[0].text,
                        country: item.context[1].text,
                        city: item.text,
                        latitude: item.geometry.coordinates[1],
                        longitude: item.geometry.coordinates[0],
                        isFavorite: false,
                    }
                    return newItem;
                })

            setCities(dataFormatted);

        } catch (error) {
            
        } finally{
            setIsLoading(false);
        }
    }

    async function handleNewCity(id: string){
        const city = cities.find(city => city.id === id);

        if(city){
            const response = await AsyncStorage.getItem(CITY_COLLECTION);
            const data = response ? JSON.parse(response) : [];

            const verifyCity = data.find( (cityStorage: CityProps) => cityStorage.id === id )
            
            if(verifyCity){
                return Alert.alert('Oops!', 'Você já adicionou essa cidade!')
            }

            data.push(city);

            await AsyncStorage.setItem(CITY_COLLECTION, JSON.stringify(data));
            Alert.alert('Legal!',"Cidade adicionada a sua lista!");
        }else{
            Alert.alert('Oops!',"Algo deu errado");
        }
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
                        onChangeText={text => fetchLocalMapBox(text)}
                        placeholder="Informe a cidade buscada..."
                        placeholderTextColor={COLORS.WHITE}
                    />
                </InputContent>
            </Header>
            <Content>
                {
                    isLoading 
                    ? <Load/>
                    : <CitiesList
                        data={cities}
                        keyExtractor={(item) => item.id}
                        renderItem={({item})=> 
                            <CityCard 
                                data={item}
                                onPress={() => handleNewCity(item.id)}
                            />}
                        />
                }
            </Content>
        </Container>
    )
}
