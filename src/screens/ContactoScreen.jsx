import React, { useState } from 'react';
import { View, Image, StatusBar, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/header-component/header-informacion";
import Contactos from "../components/Scroll/scrollContacto";
import ContactosLlamada from "../components/Scroll/scrollContactollamadas";
import colors from "../styles/colors";


const ContactoScreen = () => {
  //  const navigation = useNavigation();
    const [boton1Presionado, setBoton1Presionado] = useState(true);
    const [boton2Presionado, setBoton2Presionado] = useState(false);

    const handleBoton1Press = () => {
        setBoton1Presionado(true);
        setBoton2Presionado(false);
    };

    const handleBoton2Press = () => {
        setBoton1Presionado(false);
        setBoton2Presionado(true);
    };

    return (
        <View style={styles.mainContainer}>
            {/* El Header del contacto */}
            <Header iconSource={require("../imagenes/analizar/iconoHome2.png")} text="Contactos" id="contactos"/>

            <View style={styles.containerF}>
                <TouchableOpacity
                    style={[
                        styles.botonI,
                        boton1Presionado ? styles.botonPresionado : styles.botonNoPresionado,
                    ]}
                    onPress={handleBoton1Press}
                >
                    <Text
                        style={[
                            styles.botonTexto,
                            boton1Presionado ? styles.botonTextoPresionado : styles.botonTextoNoPresionado,
                        ]}
                    >
                        Registros
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.botonD,
                        boton2Presionado ? styles.botonPresionado : styles.botonNoPresionado,
                    ]}
                    onPress={handleBoton2Press}
                >
                    <Text
                        style={[
                            styles.botonTexto,
                            boton2Presionado ? styles.botonTextoPresionado : styles.botonTextoNoPresionado,
                        ]}
                    >
                        Llamadas
                    </Text>
                </TouchableOpacity>
            </View>

            {boton1Presionado && <Contactos />}
            {boton2Presionado && <ContactosLlamada />}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.YELLOW2
    },
    containerF: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 10,
        height: 60,
        paddingHorizontal: 20,
    },
    botonI: {
        flex: 0.5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonD: {
        flex: 0.5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0.5,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonPresionado: {
        backgroundColor: '#F77333',
        borderColor: 'white',
    },
    botonNoPresionado: {
        backgroundColor: 'white',
    },

    botonTextoPresionado: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16
    },
    botonTextoNoPresionado: {
        color: '#D9D9D9',
        fontWeight: 'bold',
        fontSize: 16
    },
});

export default ContactoScreen;
