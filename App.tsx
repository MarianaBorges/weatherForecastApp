import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './src/screens/Home';
import { Seach } from './src/screens/Seach';
import { Details } from './src/screens/Details';
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
    <>
      <ThemeProvider theme={theme}>
        <Details />
        <StatusBar style='light' />
      </ThemeProvider>
    </>
  );
}