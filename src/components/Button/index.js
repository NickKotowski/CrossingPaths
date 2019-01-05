import React, { Component } from 'react';
import { TouchableOpacity, Text } from'react-native';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { children, text } = this.props;
        return(
            <TouchableOpacity>
                <Text>{text}</Text>
                {children}
            </TouchableOpacity>
        );
    }
}