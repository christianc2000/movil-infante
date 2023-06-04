import React from 'react';
import { View, Image, StatusBar, Text, TouchableOpacity } from "react-native";
import { loginStyles, mainStyles } from "../styles/styles";
import colors from "../styles/colors";
import ConfirmationCodeInput from "../components/confirmationCodeInput";
import TextLink from '../components/textLink';

function LoginPage() {

    return (
        <View style={[mainStyles.container]}>
            <StatusBar backgroundColor={colors.YELLOW2} translucent={true} />
            <View style={loginStyles.logo}>
                <Image source={require('../../assets/logo_clean.png')} style={{ width: 450, resizeMode: 'contain' }} />
            </View>
            <Text style={mainStyles.titleText}>
                Por favor, introduzca el código de vinculación de "Qstodio"
            </Text>
            <ConfirmationCodeInput />
            <TextLink text="¿Cómo adquirir un código vinculante?" />
            <TouchableOpacity style={[mainStyles.btnMain]}
                onPress={console.log("CLICK HER")}>
                <Text style={[mainStyles.btntxt]}>INGRESAR</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginPage;