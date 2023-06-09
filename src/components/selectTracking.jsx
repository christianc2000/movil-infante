import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../styles/colors';
import ScrollTracking from '../components/Scroll/scrollTracking';

const SelectComponent = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const options = [
        { label: 'Seleccione o salir', value: '' },
        { label: 'Hoy', value: 'Hoy' },
        { label: 'Ayer', value: 'Ayer' },
        { label: 'Antes de ayer', value: 'Antes de ayer' },
        { label: 'Ayer Antes de ayer', value: 'Ayer Antes de ayer' },
        // Resto de las opciones
    ];

    const handleValueChange = (itemValue) => {
        if (itemValue != '') {
            setSelectedValue(itemValue);
            console.log('Opción seleccionada:', itemValue);
        } else {
            console.log('Opcion seleccionada:', selectedValue);
        }


        // Agregar lógica adicional para cerrar el modal si es necesario
    };

    return (
        <View style={{flex:1}}>
            <View style={styles.pickerContainer}>
                <View style={styles.container}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={handleValueChange}
                        style={styles.picker}
                        mode="modal"
                        dropdownIconColor={colors.WHITE}
                        dropdownStyle={styles.dropdownStyle}
                    >
                        {options.map((option) => (
                            <Picker.Item
                                borderWidth={2}
                                key={option.value}
                                label={option.label}
                                value={option.value}
                                style={styles.pickerItem}
                            />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={{flex:1, backgroundColor:colors.WHITE}}>
                <ScrollTracking/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 30,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center', // Centra verticalmente los elementos dentro del contenedor
        marginHorizontal: 20,
    },
    picker: {
        maxWidth: 200,
        width: '100%', // Ancho del Picker al 100% del contenedor
        color: 'white', // Color del texto seleccionado

    },
    pickerItem: {
        maxWidth: 120,
        fontSize: 13, // Tamaño de letra para las opciones
    },
    dropdownStyle: {
        backgroundColor: 'black',
        maxWidth: 120,
        width: 120, // Ancho deseado del modal  
    },
    pickerContainer: {
        marginTop: 10,
        height: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center', // Centra verticalmente los elementos dentro del contenedor
    },
});

export default SelectComponent;
