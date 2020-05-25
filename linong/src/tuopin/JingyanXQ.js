import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
import Button from 'react-native-button';
const { width } = Dimensions.get('window')

export default class Jingyan extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#ffffff',width:'100%',height:'100%'}}>
                <TouchableOpacity onPress={()=>Actions.pop()}>
                <View>
                    <Image style={{width:'3.2%',marginTop:20,marginBottom:20,marginLeft:20}} source={require('../tu/011.png')}/>
                </View>
                </TouchableOpacity>
                <ScrollView>
                    <View style={styles.top}>
                        <View style={styles.head}>
                            <Image style={styles.touxiang} source={require('../tu/tou.jpg')}></Image>
                            <Text style={styles.username}>所念皆星河</Text>
                        </View>
                        <View style={styles.zhengwen}>
                            <Text style={styles.zi}>春天来了，种一棵树是一件非常有意义的事情。无论是家人们一起种树，还是朋友们一起种树。看着小树一天天长大，见证岁月的痕迹，
                                这一定很奇妙。今天我和大家一起分享种树的详细步骤。带着你的工具，带着美丽的心情，一起来种树吧。1、首先，我们要挖一个比树根大一点的深坑，大小的判断标准约为树根的两倍大小；

2、其次，挖坑的时候注意周边环境和土壤，如果周边的环境比较硬的话，那么坑的大小应该再稍微大一点，如果不是，那么坑的容积应该稍微大些；

3、第三，解开束缚在树上的绑绳，我们都知道，树根如果坏了的话，那么这棵树就等于已经死了，栽上也没有用；

4、第四，这个时候最好在树坑中浇点水，先把墒情给培养一下，然后把树苗放到坑中，扶正，深度和树苗刚挖出来的时候差不多即可；

5、第五，这个时候就应该往树坑里面填土了，这个时候要注意，填土的时候稍微把树苗往上面拉一下，这个时候为了能够让树根彻底朝下，方便扎根；

6、第六，土填埋一会的时候，用脚将土踩一下，避免有风的时候把树苗挂到，其次，待会浇水的时候容易产生缝隙，跑墒情；

7、第七，水浇过以后，记着将树洞上面铺上一层薄薄的树叶或者塑料薄膜，以防止墒情跑掉，并避免杂草的生长，如果条件允许，可以适当给树木稍微加电肥料；

8、第八，给树木来一次比较深入的透水，这一步非常关键，不宜过多，其次，树苗在选取的时候有一部分的根部是已经受伤了的，所以，保证水分对小树苗很关键；

9、最后一点，栽树的时候要选取太阳不是很毒辣的天气，这样可以促进树苗的成活率，同时也避免树苗浇水以后墒情跑的太快。最好的方法就是选择小雨的天气或者阴天去种树，成活率会大大提高。

栽树要避开大晴天，选择适当的树苗种在适宜的环境里。
                            </Text>
                        </View>
                        <View style={styles.dibu}>
                        <Image style={{width:25,height:25,marginLeft:'65%',marginTop:16,top:-8}} source={require('../tu/j1.png')}/>
                            <Text style={styles.zi1}>18</Text>
                            <Image style={{width:25,height:25,marginLeft:'3%',marginTop:16,top:-8}} source={require('../tu/j2.png')}/>
                            <Text style={styles.zi1}>18</Text>
                            <Image style={{width:25,height:25,marginLeft:'3%',marginTop:16,top:-8}} source={require('../tu/j3.png')}/>
                            <Text style={styles.zi1}>18</Text>
                        </View>
                        
                    </View>
                    <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5'}}>

                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.pl}>
                            <View style={styles.pltop}>
                                <Image style={styles.pltouxiang} source={require('./gris.jpg')}></Image>
                                <Text style={styles.plusername}>Jack Ma</Text>
                            </View>
                            <Text style={styles.pltext}>
                                学到了，感谢分享！
                            </Text>
                        </View>
                        <View style={{width:'100%',height:2,backgroundColor:'#F6F6F6'}}>

                    </View>
                        <View style={styles.pl}>
                            <View style={styles.pltop}>
                                <Image style={styles.pltouxiang} source={require('../tu/qinghua.jpg')}></Image>
                                <Text style={styles.plusername}>清华</Text>
                            </View>
                            <Text style={styles.pltext}>
                                植树造福人类！
                            </Text>
                        </View>
                        <View style={{width:'100%',height:2,backgroundColor:'#F6F6F6'}}>

                    </View>
                    </View>
                    <View>
                    <Button onPress={()=>Actions.pl()}
                    style={{
                        width: 20, height: 80,
                        borderRadius: 50,
                        textAlignVertical: 'center',
                        backgroundColor: 'red',
                        color: '#fff',
                        top:-20,
                        marginLeft:'80%',
                        
                    
                    }}>
                    评论
                </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 860,
        top:15,
        borderColor: 'white',
        borderWidth: 2
    },
    bottom: {
        width: '100%',
        height: 600,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10
    },
    head:{
        width:'100%',
        height:80,
        borderColor: 'white',
        borderWidth: 2,
        top:20,
        flexDirection: 'row'
    },
    touxiang: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 3,
        marginLeft: 15
    },
    username: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20
    },
    zhengwen: {
        marginLeft: width * 0.025,
        width: width * 0.95,
        height: 660,
        top:20,
        borderWidth: 2,
        borderColor: 'white',
        paddingTop: 10,
        
    },
    zi:{
        fontSize:18,
        color:'#666666'
    },
    zi1:{
        top:9,
        left:2,
        fontSize:17,
        color:'#757575'
    },
    dibu: {
        marginLeft: width * 0.025,
        width: width * 0.95,
        height: 40,
        top:58,
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
    },
    pl:{
        width:'100%',
        height:110,
        borderWidth: 1,
        borderColor: 'white'
    },
    pltop:{
        width:'100%',
        height:80,
        flexDirection: 'row'
    },
    pltouxiang:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 3,
        marginLeft: 15
    },
    plusername:{
        marginTop: 17,
        marginLeft: 12,
        fontSize: 15
    },
    pltext:{
        marginTop: -10,
        marginLeft: 23,
        fontSize: 14
    }
})