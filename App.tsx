import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { WeatherProvider } from './src/hooks/weather';
import { CityProvider } from './src/hooks/city';

import { Routes } from './src/routes';

import theme from './src/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  if(!fontsLoading){
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CityProvider>
        <WeatherProvider>
          <ThemeProvider theme={theme}>
            <Routes />
            <StatusBar style='light' />
          </ThemeProvider>
        </WeatherProvider>
      </CityProvider>
    </GestureHandlerRootView>
  );
}