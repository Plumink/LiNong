import React,{Component} from 'react';
import { View, Text, Dimensions,StyleSheet,TextInput,Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Home extends Component{
    constructor(){
      super()
    }

    // <TouchableOpacity onPress={() => Actions.publish()}>
    //                             <Icon2 name='edit' color={'rgb(174,174,174)'} size={26} style={{marginLeft:15}}/>
    //                             <Text style={styles.listtext}>我的发布</Text>
    //                         </TouchableOpacity>


    render(){
        return (
          <ScrollView>
            <View style={{backgroundColor:'white',flex:1}}>
            {/* 状态栏 */}
            
            <View style={styles.header}>
              <TextInput style={styles.inp} placeholder="请输入商品名称" placeholderTextColor="gray"/>
            </View>
            <View>
              <Text style={styles.weather}>天气</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.nongye}>
                <Text style={styles.tit1}>农业</Text>
                <Text style={styles.tit2}>小知识，帮你高效种田</Text>
                  <View style={styles.content1}>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                  </View>
                  <View style={styles.content1}>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                  </View>
              </View>
              <View style={styles.contentR}>
                <View style={styles.muye}>
                  <Text style={styles.tit1}>牧业</Text>
                  <Text style={styles.tit2}>小知识，帮你高效养殖</Text>
                  <View style={styles.content1}>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                  </View>
                </View>
                <View style={styles.bangshou}>
                  <Text style={styles.tit1}>找帮手</Text>
                  <Text style={styles.tit2}>大型农机帮忙</Text>
                  <View style={styles.content1}>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                    <Image source={require('../pic/bz.png')} style={styles.img1}/>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.hangqing}>
              <Image source={require('../pic/lb1.png')} style={styles.imgLb}/>
            </View>
            <View style={styles.guanggao}>
              <View style={styles.gg1}>
                <Image source={require('../pic/gg.png')} style={styles.img2}/>
                <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                <Text style={styles.txt3}>36.00/斤</Text>
                <Text style={styles.txt4}>江苏</Text>
              </View>
              <View style={styles.gg2}>
                <Image source={require('../pic/gg.png')} style={styles.img2}/>
                  <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                  <Text style={styles.txt3}>36.00/斤</Text>
                  <Text style={styles.txt4}>江苏</Text>
              </View>
            </View>
            <View style={styles.guanggao}>
              <View style={styles.gg1}>
                <Image source={require('../pic/gg.png')} style={styles.img2}/>
                <Text style={styles.txt2}>蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜蔬菜</Text>
                <Text style={styles.txt3}>36.00/斤</Text>
                <Text style={styles.txt4}>江苏</Text>
              </View>
              <View style={styles.gg2}>
                <Image source={require('../pic/gg.png')} style={styles.img2}/>
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
        justifyContent:'center',
        // alignItems:'center'
    },
    inp:{
      width:380,
      height:35,
      top:2,
      left:25,
      backgroundColor:'#eee',
    },
    weather:{
      width:'90%',
      height:90*s,
      backgroundColor:'skyblue',
      margin:20*s,
      borderRadius:20*s,
      left:10
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
