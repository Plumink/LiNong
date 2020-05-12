import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
const { width } = Dimensions.get('window')

export default class Jingyan extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={{backgroundColor:'#ffffff',width:'100%',height:'100%'}}>
                <TouchableOpacity onPress={()=>Actions.pop()}>
                <View>
                    <Image style={{width:20,height:20,marginTop:20,marginLeft:20}} source={require('../tu/011.png')}/>
                </View>
            </TouchableOpacity>
                <View style={styles.head}>
                    <Text style={styles.l}>|</Text>
                    <Text style={styles.jy}>经验之谈</Text>
                </View>
                <TouchableOpacity onPress={()=>Actions.jy()}>
                    <View style={styles.body}>
                        <View style={styles.yh}>
                            <Image style={styles.touxiang} source={require('../tu/tou.jpg')}></Image>
                            <Text style={styles.username}>所念皆星河</Text>
                        </View>
                    
                        <View style={styles.zhengwen}>
                            <Text style={{fontSize:16,color:'#666666'}}>春天来了，种一棵树是非常有意义的事情。无论是家人们一起种树，还是朋友们一起
                                种树。看着小树一天天长大，见证岁月的哼唧。这一定很奇妙。
                            </Text>
                            <Text style={{fontSize:16,color:'#666666'}}>今天我和大家一起分享种树的详细步骤。带着你的工具，带着美丽的心情，一起来种树吧。
                            </Text>
                        
                        </View>
                     
                        <View style={styles.dibu}>
                            <Text style={styles.time}>1小时前</Text>
                            <Image style={{width:20,height:20,marginLeft:'50%',marginTop:16,top:-8}} source={require('../tu/j1.png')}/>
                            <Text style={styles.zi}>18</Text>
                            <Image style={{width:20,height:20,marginLeft:'3%',marginTop:16,top:-8}} source={require('../tu/j2.png')}/>
                            <Text style={styles.zi}>18</Text>
                            <Image style={{width:20,height:20,marginLeft:'3%',marginTop:16,top:-8}} source={require('../tu/j3.png')}/>
                            <Text style={styles.zi}>18</Text>
                            {/* <Text style={styles.iconStyle}>{'\ue8ad'}<Text style={styles.iconText}>点赞</Text></Text>
                            <Text style={styles.iconStyle}>{'\ue891'}<Text style={styles.iconText}>评论</Text></Text>
                            <Text style={styles.iconStyle}>{'\ue613'}</Text> */}
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={{width:'100%',height:10,backgroundColor:'#F5F5F5'}}>

                    </View>
                    <View style={styles.body}>
                        <View style={styles.yh}>
                            <Image style={styles.touxiang} source={require('../tu/tou.jpg')}></Image>
                            <Text style={styles.username}>伏羲后人</Text>
                        </View>
                        <View style={styles.zhengwen}>
                            <Text style={{fontSize:16,color:'#666666'}}>二十四节气是中国古代古代订立的一种用来指导农事的补充历法，分别是：立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至
                            、小暑、大暑、立秋、处暑、白露、秋分、寒霜、霜降、立冬、小雪、大学、冬至、小寒、大寒
                            </Text>
                            
                        </View>
                        <View style={styles.dibu}>
                            <Text style={styles.time}>10分钟前</Text>
                            <Image style={{width:20,height:20,marginLeft:'50%',marginTop:16,top:-8}} source={require('../tu/j1.png')}/>
                            <Text style={styles.zi}>18</Text>
                            <Image style={{width:20,height:20,marginLeft:'3%',marginTop:16,top:-8}} source={require('../tu/j2.png')}/>
                            <Text style={styles.zi}>18</Text>
                            <Image style={{width:20,height:20,marginLeft:'3%',marginTop:16,top:-8}} source={require('../tu/j3.png')}/>
                            <Text style={styles.zi}>18</Text>
                            {/* <Text style={styles.iconStyle}>{'\ue8ad'}<Text style={styles.iconText}>点赞</Text></Text>
                            <Text style={styles.iconStyle}>{'\ue891'}<Text style={styles.iconText}>评论</Text></Text>
                            <Text style={styles.iconStyle}>{'\ue613'}</Text> */}
                        </View>
                    </View>
                    <View style={{width:'100%',height:10,backgroundColor:'#F5F5F5'}}>

                    </View>
            
                <Button
                    style={{
                        width: 60, height: 60,
                        borderRadius: 30,
                        textAlignVertical: 'center',
                        backgroundColor: 'red',
                        color: '#fff',
                        marginLeft:'87%',
                        top:'30%'
                    }}>
                    +
                </Button>
               
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        width: '100%',
        height: 48,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#DBDBDB',
        flexDirection: 'row',
        top:15,
        paddingLeft: 18
    },
    l: {
        
        fontSize: 27,
        fontWeight: 'bold',
        color: 'grey',
    },
    jy: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: 11,
        
    },
    zi:{
        top:8,
        left:2,
        color:'#757575'
    },
    time:{
        fontSize:13,
        marginLeft:12,
        color:'#A7A7A7',
        marginTop:10
    },
    body: {
        width: '100%',
        height: 255,
        borderWidth: 2,
        borderColor: 'white',
        
        marginTop: 14
    },
    yh: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderColor: 'white',
        flexDirection: 'row'
    },
    touxiang: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 15
    },
    username: {
        marginTop: 15,
        marginLeft: 25,
        fontSize: 15
    },
    zhengwen: {
        marginLeft: width * 0.025,
        width: width * 0.95,
        height: 150,
        borderWidth: 1,
        borderColor: 'white',
        paddingLeft: 15,
        top:3,
        paddingTop: 8
    },
    dibu: {
        marginLeft: width * 0.025,
        width: width * 0.95,
        height: 40,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white'
    },
    iconStyle: {
        fontFamily: 'iconfont',
        marginTop: -3,
        fontSize: 23,
        lineHeight: 40,
        marginLeft: 15
    },
    iconText: {
        fontSize: 15
    }
})