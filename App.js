import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contents/auth';


export default function App() {
 return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </AuthProvider>
   </NavigationContainer>
  );
}