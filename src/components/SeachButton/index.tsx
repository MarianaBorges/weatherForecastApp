import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { SeachIcon, Container, Button } from "./styles";

type Props = TouchableOpacityProps;

export function SeachButton({...rest}:Props){
    const {COLORS} = useTheme();

    return(
        <Container>
            <Button activeOpacity={0.8} {...rest}>
                <SeachIcon 
                    name="md-search-sharp" 
                    size={24} 
                    color={COLORS.WHITE} 
                />
            </Button>
        </Container>
    )
}