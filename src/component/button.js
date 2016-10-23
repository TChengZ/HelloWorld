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
            status: 1
        };
    }
    onPressClick = () => {
        const{onClick} = this.props;
        this.props.onClick();
    };
    render(){
        const {text, beijiingyanse} = this.props;
        return(
            <TouchableHighlight style={[styles.buttons, {backgroundColor:this.props.beijingyanse}]}
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
        }
    }
);