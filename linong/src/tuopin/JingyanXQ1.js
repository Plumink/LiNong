import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';

const { width } = Dimensions.get('window')

export default class JingyanXQ1 extends Component {
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
                            <Text style={styles.zi}>二十四节气是中国古代古代订立的一种用来指导农事的补充历法，分别是：立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至
                            、小暑、大暑、立秋、处暑、白露、秋分、寒霜、霜降、立冬、小雪、大学、冬至、小寒、大寒
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
                                二十四节气是劳动人民智慧的结晶！
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
                                感谢分享
                            </Text>
                        </View>
                        <View style={{width:'100%',height:2,backgroundColor:'#F6F6F6'}}>

                    </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 800,
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
        height: 600,
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