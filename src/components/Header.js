import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from'react-native';
import styles from './styles';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { title, labelStyle, inputStyle, ...more } = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnLeft} >
                    
                </TouchableOpacity>
                <Text>
                    {title}
                </Text>
                <TouchableOpacity style={styles.btnRight} >
                    
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
    },

    btnLeft: {

    },

    btnRight: {

    },
    
    txtTitle: {

    }
})