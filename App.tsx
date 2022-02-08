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

import { Routes } from './src/routes';

import theme from './src/theme';

export default function App() {
  const [fontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  if(!fontsLoading){
    return <AppLoading />
  }

  return (
    <WeatherProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style='light' />
      </ThemeProvider>
    </WeatherProvider>
  );
}