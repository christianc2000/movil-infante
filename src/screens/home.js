import React from 'react';
import { View, Image, StatusBar, Text } from "react-native";
import { loginStyles, mainStyles } from "../styles/styles";
import colors from "../styles/colors";

function HomePage() {

    return (
        <View style={[mainStyles.container]}>
            <StatusBar backgroundColor={colors.YELLOW2} translucent={true} />
            <View style={loginStyles.logo}>
                <Image source={require('../../assets/logo_clean.png')} style={{ width: 350, resizeMode: 'contain' }} />
            </View>
            <Text style={mainStyles.titleText}>
                Por favor, introduzca el código de vinculación de "Qstodio"
            </Text>
        </View>
    );
};

export default HomePage;