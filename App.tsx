import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';
import { OdibeeSans_400Regular } from '@expo-google-fonts/odibee-sans';
import AppLoading from 'expo-app-loading';
import Routes from './scr/routes/index.routes';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OdibeeSans_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar style='light' />
        <AppLoading />
      </>
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <Routes />
    </>
  );
}
