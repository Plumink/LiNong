import React,{Component} from 'react';
import { View, Text, Dimensions,Image,ScrollView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Tuopin extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <ScrollView>
            <View style={{backgroundColor:'#43DC95',height:70,width:'100%'}}>
              <View style={{
                flexDirection:'row',
                height:60,
                justifyContent:'center'
              }}>
                  <Image style={{width:50,height:50,marginLeft:-400,marginTop:10}} source={require('../tu/001.png')}/>
                  
                
                
                  
              </View>
              <Image style={{width:45,height:45,marginLeft:440 ,marginTop:-47}} source={require('../tu/11.png')}/>

        </View>
        <View style={{width:'100%',height:100,backgroundColor:'white'}}>
        <Image style={{width:40,height:40,marginLeft:62,marginTop:15}} source={require('../tu/002.png')}/>
        <Text style={{marginLeft:64,marginTop:5,fontSize:17}}>政策</Text>
        <Image style={{width:40,height:40,marginLeft:250,marginTop:-68}} source={require('../tu/003.png')}/>
        <Text style={{marginLeft:255,marginTop:5,fontSize:17}}>经验</Text>
        <Image style={{width:40,height:40,marginLeft:440,marginTop:-68}} source={require('../tu/004.png')}/>
        <Text style={{marginLeft:443,marginTop:5,fontSize:17}}>科技</Text>
        </View>
        <TouchableOpacity onPress={()=>Actions.two()}>
        <View style={{width:'100%',height:250,backgroundColor:'white'}}>
        <Image style={{width:'100%',height:250}} source={require('../tu/005.jpg')}/>
        </View>
        </TouchableOpacity>
        <View style={{width:'100%',height:100,backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>【扶贫热点】国务院联防联控机制召开...</Text>
        </View>
        <View style={{width:'100%',height:100,marginTop:3,backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>【扶贫热点】江西25个贫困县全部脱贫</Text>
        </View>
        <View style={{width:'100%',height:100,marginTop:3,backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>【扶贫热点】就业扶贫“点对点”“门对门”</Text>
            <Image style={{width:230,height:100,marginLeft:270,marginTop:-20}} source={require('../tu/006.jpg')}/>
        </View>
        </ScrollView>
        )
    }
}
