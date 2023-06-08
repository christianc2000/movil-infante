import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/header-component/header-informacion';
import colors from '../styles/colors';

const TrackingScreen = ({ navigation }) => {
  const santaCruzLocation = {
    latitude: -17.7846,
    longitude: -63.1822,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    {
      title: 'Santa Cruz',
      description: 'Bolivia',
      coordinate: santaCruzLocation,
    },
  ];

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
        <MapView style={styles.map} region={santaCruzLocation}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
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
    height:450,
    marginTop:10,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.GRAYTEXTLIGHT
  },
  map: {
    flex: 1,
    maxHeight: 450, // Altura máxima del mapa para no exceder la altura del contenedor
  },
});

export default TrackingScreen;
