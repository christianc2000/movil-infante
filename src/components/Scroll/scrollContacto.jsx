import React from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import OpcionContacto from "../contactoComponents/contactos.jsx";
import colors from '../../styles/colors.jsx';

const ScrollableContainer = () => {
    const data = [
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        { nro: "66256262", nombre: "Sabrina" },
        { nro: "76726271", nombre: "Johan" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "76726271", nombre: "Kimetsu" },
        { nro: "73629723", nombre: "Christian" },
        { nro: "67382223", nombre: "Maria" },
        { nro: "61122390", nombre: "Madeleine" },
        { nro: "78912931", nombre: "Karoline" },
        // ... agregar el resto de tus datos aquí
    ];

    const renderItem = ({ item }) => (
        <OpcionContacto number={item.nro} name={item.nombre} />
    );

    const getItemCount = () => data.length;

    const getItem = (data, index) => data[index];

    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor: 'white', height: 22, textAlignVertical: 'center', textAlign:'center'}}/>
            <View style={{ flex: 1 }}>
                <VirtualizedList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                    getItemCount={getItemCount}
                    getItem={getItem}
                    style={{ backgroundColor: 'white', paddingHorizontal: 20 }}
                />
            </View>
        </View>

    );
};

export default ScrollableContainer;
