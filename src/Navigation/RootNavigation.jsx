import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ContactoScreen from '../screens/ContactoScreen';
import InicioScreen from '../screens/InicioScreen';


const Navigation = () => {
    return (
        <NavigationContainer>
           <ContactoScreen/>
        </NavigationContainer>
    );
}

export default Navigation;
