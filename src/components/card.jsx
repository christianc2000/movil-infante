import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Card = ({ iconSource, text, name, navigation }) => {
  const handlePress = () => {
    if (name === 'contacto') {
      navigation.navigate('Contacto');
    } else if (name === 'tracking') {
      navigation.navigate('Tracking');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={iconSource} style={styles.icon} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 15, // Separación en el borde derecho
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
});

export default Card;
