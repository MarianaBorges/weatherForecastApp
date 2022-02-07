import React from "react";
import { TextInputProps } from "react-native";

//import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Container } from "./styles";

type Props = TextInputProps;

export function Input({ ...rest}: Props){
    return (
       <Container {...rest}/>
    );
}