import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const Card = ({ iconSource, text, id }) => {
    return (
        <View style={styles.containerFila}>
            <Image source={iconSource} style={styles.icon} resizeMode="contain" />
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Botón ' + id + ' presionado')}>
                <View style={styles.buttonContent}>
                    <Text style={[styles.buttonText, { color: 'white' }]}>Analizar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerFila: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 60,
        paddingLeft: 10,
        paddingRight:0,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 2,
    },
    containerWithMargin: {
        backgroundColor: '#F5F5F5',
        marginHorizontal: 0,
        marginVertical:5
    },
    button: {
      
        width: 90,
        height: 30,
        backgroundColor: '#4ABDAC',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    icon: {
        width: 35,
        height: 35,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666666',
    },
});

export default Card;
