import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Header from '../components/header-component/header-informacion';
import colors from '../styles/colors';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const TrackingScreen = ({ navigation }) => {
    const [region, setRegion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getCurrentLocation();
            } else {
                console.log('Location permission denied');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                });
                setLoading(false); // Se establece loading en false después de obtener la ubicación
            },
            (error) => {
                console.log(error);
                setLoading(false); // Se establece loading en false en caso de error
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
        );
    };

    return (
        <View style={styles.mainContainer}>
            {/* El Header del contacto */}
            <Header
                iconSource={require('../imagenes/analizar/iconoHome2.png')}
                text="Tracking"
                id="tracking"
                navigation={navigation}
            />

            {/* Mapa de Google */}
            <View style={styles.mapContainer}>
                {loading ? ( // Se muestra el indicador de carga mientras loading es true
                    <ActivityIndicator style={[styles.loadingIndicator, { backgroundColor: 'white' }]} size="large" color={colors.GRAYTEXTLIGHT} />
                ) : (
                    <MapView style={styles.map} region={region} showsUserLocation={true} />
                )}
            </View>

            {/* Selector de opciones */}
            <View style={styles.pickerContainer}>
              
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.YELLOW2,
    },
    mapContainer: {
        height: 300,
        marginTop: 5,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: colors.GRAYTEXTLIGHT,
    },
    map: {
        flex: 1,
    },
    pickerContainer: {
        marginTop: 10,
        height: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TrackingScreen;
