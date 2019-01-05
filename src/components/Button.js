import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from'react-native';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { children, text, style, textStyle, ...more } = this.props;
        return(
            <TouchableOpacity style={[styles.container, style]} {...more}>
                <Text style={[styles.txtTitle, textStyle]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtTitle:{
      fontSize: 18,
    }
});