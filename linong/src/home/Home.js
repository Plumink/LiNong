import React,{Component} from 'react';
import { View, Text, Dimensions,StyleSheet,TextInput,Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Weather from './Weather';
import Geolocation from './Geolocation';

const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Home extends Component{
    constructor(){
      super()
    }

    render(){
        return (
          <ScrollView>
            <View style={{backgroundColor:'white',flex:1}}>
            {/* 状态栏 */}
            
            <View style={styles.header}>
              <Geolocation />
              <TextInput style={styles.inp} placeholder="请输入商品名称" placeholderTextColor="gray"/>
            </View>
            <View style={styles.weather}>
              <Weather />
            </View>
            <View style={styles.content}>
              <View style={styles.nongye}>
              <TouchableOpacity onPress={() => Actions.nonglist()}>
                <Text style={styles.tit1}>农业</Text>
                <Text style={styles.tit2}>小知识，帮你高效种田</Text>
                  <View style={styles.content1}>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                  </View>
                  <View style={styles.content1}>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                  </View>
              </TouchableOpacity>
              </View>
              <View style={styles.contentR}>
              <TouchableOpacity onPress={() => Actions.mulist()}>
                <View style={styles.muye}>
                  <Text style={styles.tit1}>牧业</Text>
                  <Text style={styles.tit2}>小知识，帮你高效养殖</Text>
                  <View style={styles.content1}>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                  </View>
                </View>
                </TouchableOpacity>
                <View style={styles.bangshou}>
                <TouchableOpacity onPress={() => Actions.helpone()}>
                  <Text style={styles.tit1}>找帮手</Text>
                  <Text style={styles.tit2}>大型农机帮忙</Text>
                  <View style={styles.content1}>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.hangqing}>
              <Image source={require('../img/lb1.png')} style={styles.imgLb}/>
            </View>
            <View style={styles.guanggao}>
              <View style={styles.gg1}>
                <Image source={require('../img/gg.png')} style={styles.img2}/>
                <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                <Text style={styles.txt3}>36.00/斤</Text>
                <Text style={styles.txt4}>江苏</Text>
              </View>
              <View style={styles.gg2}>
                <Image source={require('../img/gg.png')} style={styles.img2}/>
                  <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                  <Text style={styles.txt3}>36.00/斤</Text>
                  <Text style={styles.txt4}>江苏</Text>
              </View>
            </View>
            <View style={styles.guanggao}>
              <View style={styles.gg1}>
                <Image source={require('../img/gg.png')} style={styles.img2}/>
                <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                <Text style={styles.txt3}>36.00/斤</Text>
                <Text style={styles.txt4}>江苏</Text>
              </View>
              <View style={styles.gg2}>
                <Image source={require('../img/gg.png')} style={styles.img2}/>
                  <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                  <Text style={styles.txt3}>36.00/斤</Text>
                  <Text style={styles.txt4}>江苏</Text>
              </View>
            </View>
        </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height: 80*s,
        backgroundColor:'lightgreen',
        flexDirection:'row',
        alignItems:'center'
    },
    inp:{
      width:'80%',
      height:55*s,
      top:2,
      left:10,
      backgroundColor:'#eee',
    },
    weather:{
      alignItems:'center'
    },
    content:{
      width:'100%',
      height:400*s,
      alignItems:'center',
      flexDirection:'row',
      marginBottom:20*s
    },
    contentR:{
      width:'100%',
      flexDirection:'column',
    },
    nongye:{
      width:'40%',
      height:400*s,
      left:20,
      borderWidth:1,
      borderRadius:15,
      borderColor:'#999',
    },
    muye:{
      width:'45%',
      height:190*s,
      left:50,
      borderWidth:1,
      borderRadius:15,
      borderColor:'#999',
      marginBottom:20*s
    },
    bangshou:{
      width:'45%',
      height:190*s,
      left:50,
      borderWidth:1,
      borderRadius:15,
      borderColor:'#999',
    },
    tit1:{
      top:10,
      left:10
    },
    tit2:{
      top:10,
      left:10,
      color:'skyblue'
    },
    img1:{ 
      width:75,
      height:75,
      // top:10,
      marginLeft:15
    },
    content1:{
      flexDirection:'row',
      top:10,
      // borderWidth:3,
      width:200,
      height:90,
      alignItems:'center',
    },
    imgLb:{
      width:'100%',
      height:130
    },
    hangqing:{
      width:'100%',
      height:180*s,
    },
    guanggao:{
      width:'92%',
      height:260,
      flexDirection:'row',
      marginLeft:20,
      marginTop:12,
  },
  gg1:{
      flex:1,
      backgroundColor:'white',
      borderWidth:2.5,
      borderRadius:5,
      borderColor:'#999'
  },
  gg2:{
      flex:1,
      backgroundColor:'white',
      marginLeft:10,
      borderWidth:2.5,
      borderRadius:5,
      borderColor:'#999'
  },
  img2:{
    marginLeft:13,
    width:170,
    height:150
},
txt2:{
    color:'gray',
    fontSize:14,
    paddingLeft:5,
    paddingTop:13
},
txt3:{
    color:'red',
    fontSize:14,
    paddingTop:10,
    paddingLeft:5
},
txt4:{
  color:'black',
  fontSize:14,
  left:155
},
    
})
