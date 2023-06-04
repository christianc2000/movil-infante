import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactItem = ({ name, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#808080',
  },
  number: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'right',
    color: '#cccccc'
  },
});

export default ContactItem;
