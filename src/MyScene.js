/**
 * Created by Administrator on 2016/10/26.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from  'react-native';

export default class MyScene extends Component{

    static defaultProps = {
        title: 'MyScene'
    };

    render(){
        return(
            <View>
                <Text>Hi! My name is {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}><Text>点我下一页</Text></TouchableHighlight >
                <TouchableHighlight onPress={this.props.onBack}><Text>点我返回</Text></TouchableHighlight >
            </View>
        )
    }
}