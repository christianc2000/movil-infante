import React, { useState } from "react";
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { loginStyles, mainStyles } from "../styles/styles";
import TextInputForm from "../components/TextInputForm";
import colors from "../styles/colors";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import { loginToken } from "../utils/api/ApiManager";
import TextLink from "../components/textLink";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation();

    const [form, setform] = useState({
        token: '',
        error: ''
    })

    const handleInputChange = (event) => {
        setform((prevForm) => ({
            ...prevForm,
            [event.type]: event.value,
        }));
    };

    //const [token, setToken] = useState('');

    const handleLogin = () => {
        const body = {
            token: form.token
        }
        axios.post(loginToken, { body })
            .then(response => {
                // Aquí se debe hacer el navigate a la pagina de Inicio 
                console.log(response.data);
                navigation.navigate('Inicio');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={[
                    loginStyles.container,
                    { backgroundColor: colors.WHITE },
                ]}
            >
                <StatusBar backgroundColor={colors.YELLOW1} translucent={true} />
                <View style={loginStyles.contain_logo}>
                    <Animatable.Image
                        source={require("../../assets/logo_clean.png")}
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite"
                        style={{
                            height: 280,
                            width: 330,
                            resizeMode: "contain",
                            marginTop: 40,
                        }}
                    />
                </View>
                <Animatable.View style={loginStyles.contain_form} animation="bounceIn">
                    <Text style={mainStyles.titleText}>
                        Por favor, introduzca el código de vinculación de "Qstodio"
                    </Text>
                    <TextInputForm
                        keyboardType="default"
                        placeholder="Código de ingreso"
                        onChangeText={(value) => handleInputChange({
                            value: value,
                            type: 'token'
                        })}
                        icon_font="Icons.FontAwesome"
                        strError={form.error}
                        bolError={true}
                    />
                    <TextLink text="¿Cómo adquirir un código vinculante?" />
                </Animatable.View>

                <Animatable.View
                    style={loginStyles.contain_footer}
                    animation="bounceIn"
                >
                    <TouchableOpacity onPress={handleLogin}>
                        <View style={loginStyles.btnMain}>
                            <Text style={loginStyles.btntxt}>Iniciar Sesion</Text>
                        </View>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}