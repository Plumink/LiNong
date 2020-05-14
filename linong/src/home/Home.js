import React,{Component} from 'react';
import { View, Text, Dimensions,StyleSheet,TextInput,Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

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
              <Geolocation/>
              <TextInput style={styles.inp} placeholder="请输入商品名称" placeholderTextColor="#808080"/>
            </View>
            <View style={styles.weather}>
              <Weather />
            </View>
            <View style={styles.content}>
              <View style={styles.nongye}>
                <Text style={styles.titn}>农业</Text>
                <Text style={styles.titn2}>小知识，帮你高效种田</Text>
                  <View style={styles.content1}>
                    <Image source={require('../img/bz.png')} style={styles.img1}/>
                    <Image source={require('../img/bz1.png')} style={styles.img1}/>
                  </View>
                  <View style={styles.content2}>
                    <Image source={require('../img/bz2.png')} style={styles.img1}/>
                    <Image source={require('../img/bz3.png')} style={styles.img1}/>
                  </View>
              </View>
              <View style={styles.contentR}>
                <View style={styles.muye}>
                  <Text style={styles.titm}>牧业</Text>
                  <Text style={styles.tit2}>小知识，帮你高效养殖</Text>
                  <View style={styles.content3}>
                    <Image source={require('../img/my.png')} style={styles.img1}/>
                    <Image source={require('../img/my1.png')} style={styles.img1}/>
                  </View>
                </View>
                <View style={styles.bangshou}>
                  <Text style={styles.titz}>找帮手</Text>
                  <Text style={styles.tit2}>大型农机帮忙</Text>
                  <View style={styles.content3}>
                    {/* <Image source={require('../img/bs.png')} style={styles.img1}/> */}
                    <Image source={require('../img/bs1.png')} style={styles.img1}/>
                  </View>
                </View>
              </View>
            </View>

            <Swiper
              style={styles.wrapper}
              height={150}
              showsButtons={false}
              removeClippedSubviews={false} //这个很主要啊，解决白屏问题
              autoplay={true}
              horizontal ={true}
              paginationStyle={styles.paginationStyle}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
            >
                <Image source={require('../img/lb1.png')} style={styles.imgLb}/>
                <Image source={require('../img/lb2.png')} style={styles.imgLb}/>
                <Image source={require('../img/lb3.png')} style={styles.imgLb}/>
                <Image source={require('../img/lb4.png')} style={styles.imgLb}/>
                

            </Swiper>
            <View style={styles.tit3}>
              <View style={styles.fangkuai}></View>
              <Text style={styles.txt5}>广告信息</Text>
              <Text style={styles.txt6}>更多</Text>
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
        backgroundColor:'#33cc33',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    
    inp:{
      width:330,
      height:35,
      top:2,
      left:25,
      backgroundColor:'#f2f2f2',
      borderWidth:2,
      borderRadius:10,
      borderColor:'#d9d9d9',
    },
    weather:{
      width:'90%',
      height:90*s,
      backgroundColor:'skyblue',
      margin:20*s,
      borderRadius:20*s,
      left:10,
      
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
      borderColor:'#d9d9d9',
    },
    muye:{
      width:'45%',
      height:200*s,
      left:50,
      borderWidth:1,
      borderRadius:15,
      borderColor:'#d9d9d9',
      marginBottom:10*s
    },
    bangshou:{
      width:'45%',
      height:200*s,
      left:50,
      borderWidth:1,
      borderRadius:15,
      borderColor:'#d9d9d9',
    },
    titn:{
      top:10,
      left:10,
      color:'#009933',
      fontSize:27 
    },
    titm:{
      top:10,
      left:10,
      color:'#3333ff',
      fontSize:20 
    },
    titz:{
      top:10,
      left:10,
      color:'#ff9900',
      fontSize:20 
    },
    titn2:{
      top:10,
      left:10,
      color:'#999999',
      fontSize:14
    },
    tit2:{
      top:10,
      left:10,
      color:'#999999',
      fontSize:12
    },
    img1:{ 
      width:75,
      height:75,
      // top:10,
      marginLeft:15
    },
    content1:{
      flexDirection:'row',
      top:18,
      width:200,
      height:90,
      alignItems:'center',
    },
    content2:{
      flexDirection:'row',
      top:25,
      // borderWidth:3,
      width:200,
      height:90,
      alignItems:'center',
    },
    content3:{
      flexDirection:'row',
      top:12,
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
    fangkuai:{
      width:4,
      height:13,
      backgroundColor:'black',
      top:7,
      left:10
    },
    tit3:{
      width:'100%',
      height:40,
      flexDirection:'row',
      borderBottomColor:'#e6e6e6',
      borderBottomWidth:1
    },
    txt5:{
      fontSize:18,
      left:15
    },
    txt6:{
      fontSize:13,
      color:'#999999',
      left:350,
      top:5
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
      borderWidth:2,
      borderRadius:5,
      borderColor:'#d9d9d9'
  },
  gg2:{
      flex:1,
      backgroundColor:'white',
      marginLeft:10,
      borderWidth:1,
      borderRadius:5,
      borderColor:'#d9d9d9'
  },
  img2:{
    marginLeft:20,
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
