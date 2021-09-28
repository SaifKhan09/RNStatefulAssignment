/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class InputField extends React.Component() {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, onChangeText } = this.props;
        return (
            <View style={styles.InputContainer}>
                <Text style={styles.InputLabel}>{title}</Text>
                <TextInput
                    styles={styles.field}
                    onChangeText={onChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        margin: 15,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#ed931c',
        borderColor: 'black',
        width: '60%',
    },
    InputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    field: {
        borderRadius: 1,
        borderColor: 'black',
    },

});
