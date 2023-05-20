import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ConfirmationCodeInput = () => {
    const [confirmationCode, setConfirmationCode] = useState('');
    const codeInputRefs = useRef([]);

    const handleCodeChange = (code, index) => {
        setConfirmationCode(code);
        if (code.length === 1 && index < codeInputRefs.current.length - 1) {
            codeInputRefs.current[index + 1].focus();
        } else if (code.length === 0 && index > 0) {
            codeInputRefs.current[index - 1].focus();
        }
    };

    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && confirmationCode === '') {
            if (index > 0) {
                codeInputRefs.current[index - 1].focus();
            }
        }
    };

    const renderCodeInputs = () => {
        const codeInputs = [];
        for (let i = 0; i < 6; i++) {
            codeInputs.push(
                <TextInput
                    key={i}
                    ref={(ref) => (codeInputRefs.current[i] = ref)}
                    style={styles.input}
                    //value={confirmationCode[i] || ''}
                    value={confirmationCode[i]}
                    onChangeText={(code) => handleCodeChange(code, i)}
                    onKeyPress={(event) => handleKeyPress(event, i)}
                    keyboardType="numeric"
                    maxLength={1}
                />
            );
        }
        return codeInputs;
    };

    return (
        <View style={styles.container}>
            <View style={styles.codeInputContainer}>{renderCodeInputs()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    codeInputContainer: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCF',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#FFFF',
        fontSize: 24,
        width: 45,
        height: 50,
        textAlign: 'center',
        marginHorizontal: 5,
    },
});

export default ConfirmationCodeInput;
