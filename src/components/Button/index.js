import React, { Component } from 'react';
import { TouchableOpacity, Text } from'react-native';
import styles from './styles';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { children, text, style, textStyle, ...more } = this.props;
        return(
            <TouchableOpacity style={}>
                <Text style={}>{text}</Text>
            </TouchableOpacity>
        );
    }
}