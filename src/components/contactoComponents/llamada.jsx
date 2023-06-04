import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CallItem = ({ type, duration, date, time, contact }) => {
    const renderCallTypeIcon = () => {
        let iconSource;

        switch (type) {
            case 'incoming'://llamada entrante
                iconSource = require('../../imagenes/llamadas/llamadaEntrante.png');
                break;
            case 'outgoing'://llamada saliente
                iconSource = require('../../imagenes/llamadas/llamadaSaliente.png');
                break;
            case 'missed'://llamada perdida
                iconSource = require('../../imagenes/llamadas/llamadaPerdida.png');
                break;
            case 'rejected'://llamada rechazada
                iconSource = require('../../imagenes/llamadas/llamadaRechazada.png');
                break;
            default:
                iconSource = null;
        }

        return (
            <Image style={styles.callTypeIcon} source={iconSource} />
        );
    };
    return (
        <View style={styles.container}>
            {renderCallTypeIcon()}
            <View style={styles.callDetails}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactNumber}>{contact.number}</Text>
                <Text style={styles.callInfo}>{`${duration} - ${date} ${time}`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    callTypeIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    callDetails: {
        flex: 1,
    },
    contactName: {
        fontSize: 14,
        color:'black',
        fontWeight: 'bold',
    },
    contactNumber: {
        fontSize: 14,
        color: '#666666',
    },
    callInfo: {
        fontSize: 12,
        color: '#999999',
        marginTop: 2,
    },
});

export default CallItem;
