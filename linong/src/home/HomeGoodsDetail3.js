import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList
} from 'react-native';

const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class GoodsDetail3 extends Component {
    render() {
        return (
            <View style={{backgroundColor:'##a9a9a9',width:'100%',height:'100%'}}>
                {/* 详情图片内容 */}
                <View style={{width:'100%',height:480*s}}>
                    <Swiper autoplay={true} style={{padding:0}} showsPagination={false}>
                        <Image source={{uri:'https://s1.ax1x.com/2020/06/03/tU0H2D.png'}}  style={{height:'120%',width:'100%'}}/>
                        <Image source={{uri:'https://s1.ax1x.com/2020/06/03/tU0LKH.png'}} style={{height:'120%',width:'100%'}}/>
                        <Image source={{uri:'https://s1.ax1x.com/2020/06/03/tU0xat.png'}} style={{height:'120%',width:'100%'}}/>
                    </Swiper>
                </View>
                <View style={{width:60*s,height:60*s,backgroundColor:'rgba(0,0,0,0.7)',position:'absolute',top:20*s,left:20*s,borderRadius:35*s}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Icon
                            name="arrowleft"
                            color='rgba(255,255,255,0.9)'
                            style={{fontSize:40*s,marginTop:10*s,marginLeft:10*s}}
                        />
                    </TouchableOpacity>
                </View>
                {/* 价格货源区域 */}
                <View style={{width:'100%',height:200*s,backgroundColor:'#FFFFFF'}}>
                    <Text style={{color:'#ff4500',fontSize:20*s,position:'absolute',top:25*s,left:30*s}}>￥</Text>
                    <Text style={{color:'#ff4500',fontSize:35*s,position:'absolute',top:10*s,left:55*s}}>3.0</Text>
                    <Text style={{color:'#ff4500',fontSize:20*s,position:'absolute',top:25*s,left:130*s}}>/斤</Text>
                    <View style={{width:75*s,height:28*s,backgroundColor:'rgb(255,80,1)',position:'absolute',top:22*s,left:180*s}}>
                        <Text style={{color:'white',fontSize:18*s,paddingTop:2*s}}>500斤起</Text>
                    </View>
                    <Text style={{fontSize:24*s,position:'absolute',top:60*s,left:30*s}}>河北唐山无公害，优质大油桃</Text>
                    <Text style={{fontSize:24*s,position:'absolute',top:95*s,left:30*s}}>欢迎全国提货发货</Text>
                    <Icon1
                        color='rgb(117,117,117)'
                        name='location-pin'
                        style={{position:'absolute',left:30*s,top:139.5*s}}
                    />
                    <Text style={{color:'rgb(117,117,117)',fontSize:16*s,position:'absolute',top:136*s,left:50*s}}>河北省唐山市华北农场</Text>
                    <Icon2
                        color='rgb(117,117,117)'
                        name='update'
                        style={{position:'absolute',left:29*s,top:170*s,fontSize:18*s}}
                    />
                    <Text style={{color:'rgb(117,117,117)',fontSize:16*s,position:'absolute',top:167*s,left:52*s}}>3天前更新</Text>
                </View>
                {/* 规格区域 */}
                <View style={{width:'100%',height:190*s,marginTop:10*s,backgroundColor:'#FFFFFF'}}>
                    <Text style={{color:'rgb(117,117,117)',fontSize:20*s,position:'absolute',top:20*s,left:42*s}}>规格</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:20*s,left:180*s}}>小桃</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:80*s,left:180*s}}>中桃</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:140*s,left:180*s}}>大桃</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:20*s,left:480*s}}>1.00元/斤</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:80*s,left:480*s}}>3.00元/斤</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:140*s,left:480*s}}>6.00元/斤</Text>
                </View>
                {/* 交易信息 */}
                <View style={{width:'100%',height:210*s,backgroundColor:'#FFFFFF',marginTop:10*s}}>
                    <View style={{width:80*s,height:15*s,position:'absolute',left:100*s,top:50*s,borderColor:'rgb(0,204,151)',borderRadius:40*s}}></View>
                    <View style={{width:100*s,height:40*s,borderWidth:2*s,borderColor:'rgba(10,169,139,0.8)',position:'absolute',top:20*s,left:30*s,borderRadius:30*s}}>
                        <Text style={{color:'rgb(10,169,139)',textAlign:'center',paddingTop:5*s}}>交易信息</Text>
                    </View>
                    <Text style={{color:'rgb(10,169,139)',position:'absolute',fontSize:20*s,fontWeight:'bold',top:27*s,left:370*s}}>提供免费看货保障服务</Text>
                    <Text style={{color:'gray',position:'absolute',top:80*s,left:50*s}}>物流</Text>
                    <Text style={{fontSize:19*s,position:'absolute',top:79*s,left:110*s}}>整车;按斤收费,支持自提</Text>
                    <Text style={{color:'gray',fontSize:19*s,position:'absolute',top:79*s,left:550*s}}>>></Text>
                    <Text style={{color:'gray',position:'absolute',top:120*s,left:35*s}}>详细规格</Text>
                    <Text style={{fontSize:19*s,position:'absolute',top:120*s,left:130*s}}>无</Text>
                    <Text style={{color:'gray',position:'absolute',top:160*s,left:35*s}}>联系卖家</Text>
                    <Text style={{fontSize:19*s,position:'absolute',top:158*s,left:130*s}}>15075008889  刘先生</Text>
                </View>
            </View>
        )
    }
}
