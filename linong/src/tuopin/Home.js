import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component{
    render() {
        return (
             <View>
                <Text onPress={()=>Actions.z()}>政策</Text>
                <Text onPress={()=>Actions.f()}>扶贫</Text>
                <Text onPress={()=>Actions.j()}>经验</Text>
             </View>
        );
    }
}
