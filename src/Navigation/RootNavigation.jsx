import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactoScreen from '../screens/ContactoScreen';
import InicioScreen from '../screens/InicioScreen';
import TrackingScreen from '../screens/TrackingScreen';
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={InicioScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Contacto"
                    component={ContactoScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Tracking"
                    component={TrackingScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
