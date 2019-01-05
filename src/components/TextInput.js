import React, { Component, Fragment } from 'react';
import { TextInput, Text, View, StyleSheet } from'react-native';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { label, labelStyle, inputStyle, ...more } = this.props;
        return(
            <Fragment>
                {label && <Text style={[styles.txtLabel, labelStyle]}>
                    {label}
                </Text>}
                <TextInput
                    style={styles.input, inputStyle}
                    {...more}
                />
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    txtLabel: {
        fontSize: 18,
        fontStyle: 'italic',
    },

    input:{
        fontStyle: 'italic',
    }
})
