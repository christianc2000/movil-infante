import React from 'react';
import {  TouchableOpacity,Text, View, VirtualizedList, StyleSheet } from 'react-native';
import OpcionContacto from "../contactoComponents/contactos.jsx";


const ScrollableTracking = () => {
    //la fecha se busca en la base de datos y se recupera un array luego se lo pasa a data[]
    const data = [
        { fecha: "07:00:00", id: "7-9" },
        { fecha: "09:00:00", id: "9-11" },
        { fecha: "11:00:00", id: "11-13" },
        { fecha: "13:00:00", id: "13-15" },
        { fecha: "15:00:00", id: "15-17" },
        { fecha: "17:00:00", id: "17-19" },
        { fecha: "19:00:00", id: "19-21" },
        { fecha: "21:00:00", id: "21-23" },
        { fecha: "23:00:00", id: "23-01" },
        { fecha: "01:00:00", id: "01-03" },
        { fecha: "03:00:00", id: "03-05" },
        { fecha: "05:00:00", id: "05-07" },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.fecha}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
        </View>
    );

    const getItemCount = () => data.length;

    const getItem = (data, index) => data[index];

    return (
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

    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    itemText: {
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
export default ScrollableTracking;
