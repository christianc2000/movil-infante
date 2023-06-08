import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const HeaderInformacion = ({ iconSource, text, navigation}) => {
  const handlePress = () => {
      navigation.navigate('Inicio');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerFila}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.containerIcono} onPress={handlePress}>
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({

  container: {
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  containerFila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60
  },
  containerIcono: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 35,
    height: 35,
    borderColor: '#267CB5',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HeaderInformacion;
