import React,{Component} from 'react';
import { View, Text, Dimensions,StyleSheet } from 'react-native';


const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Tuopin extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <View style={{backgroundColor:'white',flex:1}}>
            <Text>脱贫</Text>
        </View>
        )
    }
}
