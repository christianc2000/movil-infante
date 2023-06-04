import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/InicioScreen';
import ContactoScreen from '../screens/ContactoScreen';

const Stack = createStackNavigator();

const ContactoStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Contacto" component={ContactoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ContactoStack;