import React from 'react';
import { View ,Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './components/LoginPage';
import RegisterScreen from './components/SignupPage';
import ForgotPasswordScreen from './components/ForgotPasswordPage';

const Stack = createNativeStackNavigator();

export default function LoginNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown:false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown:false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
