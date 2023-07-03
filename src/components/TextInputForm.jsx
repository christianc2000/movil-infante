import React from 'react';
import colors from '../styles/colors';
import { Input } from 'react-native-elements';
import { View } from 'react-native';

const TextInputForm = (props) => {

    return (
        <View style={{
            paddingRight: 10, 
            paddingLeft: 10, 
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Input
                placeholder={props.placeholder}
                containerStyle={{ 
                    marginBottom: 20, 
                    borderRadius: 26,
                    borderWidth: 1,
                    borderColor: '#777', 
                    margin: 10,
                    width: 370}}
                inputStyle={{
                    fontSize: 24, 
                    paddingVertical: 8,
                    paddingHorizontal: 8, 
                    marginTop: 12,
                    color: colors.BLACK,
                    width: 300,
                    fontFamily: "Poppins-Light"
                }}
                errorStyle={{ color: colors.RED }}
                errorMessage={(props.bolError) ? props.strError : ''}
                editable={props.editable}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    )
};

export default TextInputForm;
