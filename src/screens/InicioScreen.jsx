import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Card from "../components/card";
import Opciones from "../components/opcionHorizontal";
import colors from "../styles/colors";

const InicioScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.containerFila}>
                    <View style={styles.containerImage}>
                        <Image source={require('../imagenes/perfil/niño.jpg')} style={styles.image} resizeMode="contain" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, { fontWeight: '700', color: 'black', fontWeight: 'bold' }]}>Juan Perez Pacheco</Text>
                        <Text style={[styles.text, { fontSize: 13, fontWeight: '500', color: 'white' }]}>Maculino, 2 años</Text>
                    </View>
                    <TouchableOpacity style={styles.containerIcono} onPress={() => console.log('Botón Configuración')}>
                        <Image source={require('../imagenes/analizar/iconoConfiguracion4.png')} style={styles.icon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text, { fontWeight: '900' }]}>INFORMACION</Text>
                <View style={[styles.containerF, { height: 100 }]}>
                    <Card iconSource={require('../imagenes/informacion/Marcador2.png')} text="Tracking" id='tracking' name="tracking" navigation={navigation}/>
                    <Card iconSource={require('../imagenes/informacion/Contacto4.png')} text="Contacto" id='contacto' name="contacto" navigation={navigation} />
                </View>
            </View>
            <View style={styles.containerHeader}>
                <Text style={[styles.text, { fontWeight: 'bold', paddingLeft: 20,paddingTop: 10, paddingBottom:5 }]}>ANALIZAR</Text>
            </View>
            <View style={styles.containerScroll}>
                {/* Contenido de tu ScrollView */}
                <ScrollView>
                    <Opciones iconSource={require("../imagenes/analizar/iconoWhatsapps2.png")} text="Whatsapps" id="whatsapps" />
                    <Opciones iconSource={require("../imagenes/analizar/iconoTelegram.png")} text="Telegram" id="telegram" />
                    <Opciones iconSource={require("../imagenes/analizar/iconoFacebook.png")} text="Facebook" id="facebook" />
                    <Opciones iconSource={require("../imagenes/analizar/iconoCamara2.png")} text="Cámara" id="cámara" />
                    <Opciones iconSource={require("../imagenes/analizar/iconoDescarga4.png")} text="Descarga" id="descarga" />
                    <Opciones iconSource={require("../imagenes/analizar/iconoDocumento2.png")} text="Documento" id="documento" />
                   
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:colors.YELLOW2
    },
    container: {
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    containerScroll: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 15,
        backgroundColor: 'white',
       padding:20
    },
    containerFila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10,
        height: 60
    },
    containerF: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        height: 60
    },
    containerImage: {
        height: 50,
        width: 50
    },
    textContainer: {
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerHeader: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
        marginTop: 0,
        color: 'black'
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    containerIcono: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderRadius:50,
        width:35,
        height:35,
        borderColor:'#267CB5',
        borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingRight: 30
    }
});

export default InicioScreen;
