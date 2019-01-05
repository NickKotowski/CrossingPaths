import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from'react-native';
import styles from './styles';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { label, labelStyle, inputStyle, ...more } = this.props;
        return(
            <View>
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    txtLabel: {
        fontSize: 18,
        fontStyle: 'italic',
    },

    input:{
        fontStyle: 'italic',
    }
})