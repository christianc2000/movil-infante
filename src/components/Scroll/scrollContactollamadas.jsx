import React from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import Llamada from "../contactoComponents/llamada.jsx";

const ScrollableContainerLlamadas = () => {
    const data = [
        { type: "incoming", duration:"5 min", date:"24-10-2022", time:"17:00:32",contact: {name:"Christian",number:"76377282"} },
        { type: "outgoing", duration:"4 min", date:"25-10-2022", time:"09:00:32",contact: {name:"Maria",number:"76377282"} },
        { type: "missed", duration:"0 min", date:"24-10-2022", time:"17:56:32",contact: {name:"Madeleine",number:"76377282"} },
        { type: "rejected", duration:"0 min", date:"24-10-2022", time:"09:25:32",contact: {name:"Karoline",number:"76377282"} },
        { type: "incoming", duration:"5 min", date:"24-10-2022", time:"11:40:32",contact: {name:"Sabrina",number:"76377282"}},
        // ... agregar el resto de tus datos aquí
    ];

    const renderItem = ({ item }) => (//incoming, outgoing, missed, rejected
        <Llamada  type={item.type} duration={item.duration} date={item.date} time={item.time} contact={item.contact} />
    );

    const getItemCount = () => data.length;

    const getItem = (data, index) => data[index];

    return (
        <View style={{ flex: 1 }}>
            <Text style={{borderTopRightRadius: 20, borderTopLeftRadius: 20, height: 32, backgroundColor:'#F77333'}}/>
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

export default ScrollableContainerLlamadas;
