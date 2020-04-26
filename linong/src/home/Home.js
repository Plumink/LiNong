import React,{Component} from 'react';
import { View, Text, Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Home extends Component{
    constructor(){
      super()
    }


    render(){
        return (
            <View style={{backgroundColor:'white',flex:1}}>
            {/* 状态栏 */}
            
            <View style={styles.header}>
                <Text>搜索、、、定位</Text>
            </View>
            <View>
              <Text style={styles.weather}>天气</Text>
            </View>
            <View style={styles.content}>
              <TouchableOpacity style={styles.nongye} onPress={() => Actions.nonglist()} >
                  <Text>农业</Text>
              </TouchableOpacity>
              <View style={styles.contentR}>
                <View style={styles.muye}>
                  <Text>牧业</Text>
                </View>
                <View style={styles.bangshou}>
                  <Text>找帮手</Text>
                </View>
              </View>
            </View>
            <View style={styles.hangqing}>
              <Text>轮播图、行情</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderWidth:1,
        borderColor:'#e8e8e8',
        justifyContent:'center',
        alignItems:'center'
    },
    weather:{
      width:'95%',
      height:80*s,
      backgroundColor:'blue',
      margin:20*s,
      borderRadius:20*s
    },
    content:{
      width:'100%',
      height:400*s,
      borderWidth:1,
      borderColor:'red',
      alignItems:'center',
      flexDirection:'row',
      marginBottom:20*s
    },
    contentR:{
      width:'100%',
      flexDirection:'column',
    },
    nongye:{
      width:'50%',
      height:400*s,
      borderWidth:1,
      borderColor:'black',
      justifyContent:'center'
    },
    muye:{
      width:'50%',
      height:190*s,
      borderWidth:1,
      borderColor:'green',
      justifyContent:'center',
      marginBottom:20*s
    },
    bangshou:{
      width:'50%',
      height:190*s,
      borderWidth:1,
      borderColor:'orange',
      justifyContent:'center'
    },
    hangqing:{
      width:'100%',
      height:180*s,
      borderWidth:1,
      borderColor:'blue',
    }
    
})