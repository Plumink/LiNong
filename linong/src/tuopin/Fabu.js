import React, { Component } from 'react';
import { Text, View , Dimensions , StyleSheet,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window')

export default class Fabu extends Component{
    render(){
        return(
            <View>
                <View style={styles.head}>
                    <Text style={styles.lr} onPress={()=>Actions.pop()}>取消</Text>
                    <Text style={styles.title}>发布经验</Text>
                    <Text style={styles.lr}>发布</Text>
                </View>
                <View style={styles.body}>
                    <TextInput 
                        placeholder = {'输入内容'} 
                        placeholderTextColor = {'#BBBBBB'}
                        multiline
                    ></TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        justifyContent:'space-around',
        height:50,
        width:'100%',
        paddingTop:12
    },
    lr:{
        fontSize:13,
        color:'grey'
    },
    title:{
        fontSize:16
    },
    body:{
        borderTopWidth:2,
        borderColor:'green'
    }
})