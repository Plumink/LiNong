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

export default class GoodsDetail1 extends Component {
    render() {
        return (
            <View style={{backgroundColor:'##a9a9a9',width:'100%',height:'100%'}}>
                {/* 详情图片内容 */}
                <View style={{width:'100%',height:480*s}}>
                    <Swiper autoplay={true} style={{padding:0}} showsPagination={false}>
                        <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yx03a8.png'}}  style={{height:'120%',width:'100%'}}/>
                        <Image source={{uri:'https://s1.ax1x.com/2020/05/23/YxDFhD.png'}} style={{height:'120%',width:'100%'}}/>
                        <Image source={{uri:'https://s1.ax1x.com/2020/05/24/YxH5iF.png'}} style={{height:'120%',width:'100%'}}/>
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
                <View style={{width:'100%',height:200*s,backgroundColor:'rgb(244,244,244)'}}>
                    <Text style={{color:'#ff4500',fontSize:20*s,position:'absolute',top:25*s,left:30*s}}>￥</Text>
                    <Text style={{color:'#ff4500',fontSize:35*s,position:'absolute',top:10*s,left:55*s}}>2.00</Text>
                    <Text style={{color:'#ff4500',fontSize:20*s,position:'absolute',top:25*s,left:130*s}}>/斤</Text>
                    <View style={{width:75*s,height:28*s,backgroundColor:'rgb(255,80,1)',position:'absolute',top:22*s,left:180*s}}>
                        <Text style={{color:'white',fontSize:18*s,paddingTop:2*s}}>500斤起</Text>
                    </View>
                    <Text style={{fontSize:24*s,position:'absolute',top:60*s,left:30*s}}>山东产地沂蒙山樱桃批发，货源充足，品质优良</Text>
                    <Text style={{fontSize:24*s,position:'absolute',top:95*s,left:30*s}}>欢迎全国提货发货</Text>
                    <Icon1
                        color='rgb(117,117,117)'
                        name='location-pin'
                        style={{position:'absolute',left:30*s,top:139.5*s}}
                    />
                    <Text style={{color:'rgb(117,117,117)',fontSize:16*s,position:'absolute',top:136*s,left:50*s}}>山东省临沂市沂蒙山县</Text>
                    <Icon2
                        color='rgb(117,117,117)'
                        name='update'
                        style={{position:'absolute',left:29*s,top:170*s,fontSize:18*s}}
                    />
                    <Text style={{color:'rgb(117,117,117)',fontSize:16*s,position:'absolute',top:167*s,left:52*s}}>3天前更新</Text>
                </View>
                {/* 规格区域 */}
                <View style={{width:'100%',height:190*s,marginTop:10*s,backgroundColor:'rgb(244,244,244)'}}>
                    <Text style={{color:'rgb(117,117,117)',fontSize:20*s,position:'absolute',top:20*s,left:42*s}}>规格</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:20*s,left:180*s}}>小果</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:80*s,left:180*s}}>中果</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:140*s,left:180*s}}>大果</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:20*s,left:480*s}}>2.00元/斤</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:80*s,left:480*s}}>3.00元/斤</Text>
                    <Text style={{color:'rgb(100,100,100)',fontSize:20*s,position:'absolute',top:140*s,left:480*s}}>4.00元/斤</Text>
                </View>
                {/* 交易信息 */}
                <View style={{width:'100%',height:210*s,backgroundColor:'rgb(244,244,244)',marginTop:10*s}}>
                    <View style={{width:80*s,height:15*s,position:'absolute',left:100*s,top:50*s,borderColor:'rgb(0,204,151)',borderRadius:40*s}}></View>
                </View>
            </View>
        )
    }
}
