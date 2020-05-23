import React,{Component} from 'react';
import { View, Text, Dimensions,Image,ScrollView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');
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
              <Image style={{width:45,height:45,marginLeft:'85%' ,marginTop:-47}} source={require('../tu/111.png')}/>

        </View>
        <View style={{width:'34%',height:100,backgroundColor:'white'}}>   
        <TouchableOpacity onPress={()=>Actions.three()}>

                <Image style={{width:40,height:40,marginLeft:'45%',marginTop:15}} source={require('../tu/002.png')}/>
                <Text style={{marginLeft:'47%',marginTop:5,fontSize:17}}>政策</Text>
        
        </TouchableOpacity>
        </View>
        <View style={{width:'34%',marginLeft:'34%',marginTop:-100,height:100,backgroundColor:'white'}}>   
        <TouchableOpacity onPress={()=>Actions.four()}>
            <Image style={{width:40,height:40,marginLeft:63,marginTop:16}} source={require('../tu/003.png')}/>
            <Text style={{marginLeft:65,marginTop:5,fontSize:17}}>经验</Text>
        </TouchableOpacity>
        </View>
        <View style={{width:'34%',marginLeft:'67%',marginTop:-100,height:100,backgroundColor:'white'}}>   
        <TouchableOpacity onPress={()=>Actions.five()}>
            <Image style={{width:40,height:40,marginLeft:43,marginTop:16}} source={require('../tu/004.png')}/>
            <Text style={{marginLeft:45,marginTop:5,fontSize:17}}>科技</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>Actions.two()}>
            <View style={{width:'100%',height:250,backgroundColor:'white'}}>
            <Image style={{width:'100%',height:250}} source={require('../tu/005.jpg')}/>
            </View>
        </TouchableOpacity>
        <View style={{width:'100%',height:100,backgroundColor:'white'}}>
            <Text style={{fontSize:17,top:15}}>【扶贫热点】国务院联防联控机...</Text>
            <Image style={{width:230,height:100,marginLeft:'58%',marginTop:-24}} source={require('../tu/006.jpg')}/>
        </View>
        <View style={{width:'100%',height:100,marginTop:3,backgroundColor:'white'}}>
            <Text style={{fontSize:17,top:15}}>【扶贫热点】江西25个贫困县全...</Text>
            <Image style={{width:230,height:100,marginLeft:'58%',marginTop:-24}} source={require('../tu/t01.jpg')}/>
        </View>
        <View style={{width:'100%',height:100,marginTop:3,backgroundColor:'white'}}>
            <Text style={{fontSize:17,top:15}}>【扶贫热点】就业扶贫“点对点”...</Text>
            <Image style={{width:230,height:100,marginLeft:'58%',marginTop:-24}} source={require('../tu/t02.jpg')}/>
        </View>
        <View style={{width:'100%',height:100,marginTop:3,backgroundColor:'white'}}>
            <Text style={{fontSize:17,top:15}}>【扶贫热点】紧紧依靠人民群众...</Text>
            <Image style={{width:230,height:100,marginLeft:'58%',marginTop:-24}} source={require('../tu/t03.jpg')}/>
        </View>
        <View style={{width:'100%',height:100,marginTop:3,backgroundColor:'white'}}>
            <Text style={{fontSize:17,top:15}}>【扶贫热点】扶贫路上那些事</Text>
            <Image style={{width:230,height:100,marginLeft:'58%',marginTop:-24}} source={require('../tu/t04.jpg')}/>
        </View>
        </ScrollView>
        )
    }
}
