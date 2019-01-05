import React, { Component, Fragment } from 'react';
import { TextInput, Text, View, StyleSheet } from'react-native';
import DatePicker from 'react-native-datepicker';
import theme from '../theme';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { style, label, labelStyle, inputStyle, ...more } = this.props;
        return(
            <View style={[styles.container, style]}>
                {label && <Text style={[styles.txtLabel, labelStyle]}>
                    {label}
                </Text>}
                <DatePicker
                    style={[styles.input, inputStyle]}
                    confirmBtnText='Confirm'
                    cancelBtnText='Cancel'
                    customStyles={{
                      dateInput:{
                        borderWidth: 0,
                      },
                      dateText:{
                        fontStyle: 'italic',
                        fontSize: 18,
                        alignSelf: 'flex-start',
                      },
                    }}
                    {...more}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
  },

    txtLabel: {
        fontSize: 18,
        fontStyle: 'italic',
        alignSelf: 'flex-start',
        marginBottom: 10,
        fontWeight: 'bold',
    },

    input:{
        fontStyle: 'italic',
        borderBottomWidth: 1,
        borderBottomColor: theme.Color.Border,
        fontSize: 18,
        padding: 5,
        width: '100%'
    }
})
