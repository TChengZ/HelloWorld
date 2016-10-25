/**
 * Created by ChenZuJie on 2016/10/23.
 */

import React, { Component } from 'react';
import {
     StyleSheet, Text, TouchableHighlight
    } from 'react-native';

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            disabled: false
        };
    }
    onPressClick = (enableCallback) => {
        console.log(1)
        const{onClick} = this.props;
        this.props.onClick('canshu');
        // alert("onClick");
    };
    enable = ()=>{
        console.log(5)
        this.setState(
            {disabled: false}
        );
    };
    disable = ()=>{
        console.log(3)
        this.setState(
            {disabled: true}
        );
    };
    render(){
        const {text, beijiingyanse} = this.props;
        return(
            <TouchableHighlight style={[styles.buttons, this.state.disabled && styles.disabled]}
                                disabled={this.state.disabled}
                                onPress={ this.onPressClick}>
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
        buttons:{
            width: 150,
            height:40,
            borderRadius:20,
            backgroundColor:"green",
            justifyContent:"center",
            alignItems: 'center',
            overflow:"hidden"
        },
        disabled:{
            backgroundColor: 'gray'
        }
    }
);