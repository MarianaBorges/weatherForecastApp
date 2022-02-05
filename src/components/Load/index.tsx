import React from "react";

import LottieView from "lottie-react-native";

import Weather from '../../assets/weather.json';
import { Container } from "./styles";

export function Load(){
    return(
        <Container>
            <LottieView
                source={Weather}
                style={{height:200}}
                resizeMode='contain'
                autoPlay
                loop
            />
        </Container>
    )
}