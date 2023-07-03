import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextLink = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linkText: {
        padding: 10,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default TextLink;
