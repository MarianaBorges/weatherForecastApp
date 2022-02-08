import React, { useState, useEffect } from "react";
import { format, getYear } from 'date-fns'
import {ptBR}  from 'date-fns/locale';

import { useTheme } from "styled-components/native";
import { WeatherProps } from "../../hooks/weather";

import { 
    Container, 
    Temperature, 
    Title, 
    Text, 
    Content,
    ContentDetails,
    AtmosphericConditions,
    TemperatureVariation,
} from "./styles";

type Props = {
    data: WeatherProps;
    index: number;
}

export function WeatherWeekCard({ data, index }: Props){
    const date = new Date();
    const {COLORS} = useTheme()
    const dayFormatted = format(new Date(date.getFullYear(), date.getMonth()+1, date.getDate()+index), 'EEEE',{locale: ptBR });
    const dateFormatted = `${date.getDate()+index} de ${format(new Date(date.getFullYear(), date.getMonth(), date.getDate()+index), 'MMMM',{locale: ptBR })}`

    return(
        <Container>
            <Content>
                <ContentDetails>
                    <Title>{dayFormatted}</Title>
                    <Text>{dateFormatted}</Text> 
                </ContentDetails>
                <Temperature>
                    {data.temperature}º
                </Temperature>
            </Content>
            
            <Content>
                <ContentDetails>
                    <AtmosphericConditions>{data.weather}</AtmosphericConditions>
                    <TemperatureVariation>{data.minimum}º - {data.maximum}º</TemperatureVariation>
                </ContentDetails>
                
            </Content>
        </Container>
    )
}