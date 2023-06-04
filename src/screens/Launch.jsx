import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";


const App = () => {
    return (
        <View>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.textTitle}>INFORMACION</Text>
                    <View style={styles.containerR}>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('Botón 1 presionado')}>
                            <Image source={require('../imagenes/informacion/Marcador.png')} style={styles.image} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('Botón 2 presionado')}>
                            <Image source={require('../imagenes/informacion/Contacto.png')} style={styles.image} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textTitle}>ANALIZAR</Text>
                    <View style={styles.card}>
                        <Image source={require('../imagenes/analizar/iconoWhatsapps.png')} style={styles.icon} />
                        <Text style={styles.title}>Whatsapps</Text>
                        <TouchableOpacity style={styles.buttonH} onPress={() => console.log('Botón presionado')}>
                            <Text style={styles.buttonText}>Analizar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../imagenes/analizar/iconoTelegram.png')} style={styles.icon} />
                        <Text style={styles.title}>Telegram</Text>
                        <TouchableOpacity style={styles.buttonH} onPress={() => console.log('Botón presionado')}>
                            <Text style={styles.buttonText}>Analizar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../imagenes/analizar/iconoCamara.png')} style={styles.icon} />
                        <Text style={styles.title}>Cámara</Text>
                        <TouchableOpacity style={styles.buttonH} onPress={() => console.log('Botón presionado')}>
                            <Text style={styles.buttonText}>Analizar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../imagenes/analizar/iconoDescarga.png')} style={styles.icon} />
                        <Text style={styles.title}>Descarga</Text>
                        <TouchableOpacity style={styles.buttonH} onPress={() => console.log('Botón presionado')}>
                            <Text style={styles.buttonText}>Analizar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
      
    },
    textTitle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    containerR: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxHeight: 60,
        width: '100%',
        height: '100%',
    },
    card: {
        marginTop: 10,
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#F0EFEF',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        color: 'black',
    },
    buttonH: {
        backgroundColor: '#fc4a1a',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,

    },
});

export default App;
