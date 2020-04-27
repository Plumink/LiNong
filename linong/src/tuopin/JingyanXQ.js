import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window')

export default class Jingyan extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.top}>
                        <View style={styles.head}>
                            <Image style={styles.touxiang} source={require('./gris.jpg')}></Image>
                            <Text style={styles.username}>用户名</Text>
                        </View>
                        <View style={styles.zhengwen}>
                            <Text>正文正文正文正文正文</Text>
                        </View>
                        <View style={styles.dibu}>
                            <Text style={styles.iconStyle}>{'\ue8ad'}<Text style={styles.iconText}>点赞</Text></Text>
                            <Text style={styles.iconStyle}>{'\ue891'}<Text style={styles.iconText}>评论</Text></Text>
                            <Text style={styles.iconStyle}>{'\ue613'}</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.pl}>
                            <View style={styles.pltop}>
                                <Image style={styles.pltouxiang} source={require('./gris.jpg')}></Image>
                                <Text style={styles.plusername}>用户名</Text>
                            </View>
                            <Text style={styles.pltext}>
                                评论
                            </Text>
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
        height: 400,
        borderColor: 'red',
        borderWidth: 2
    },
    bottom: {
        width: '100%',
        height: 600,
        borderColor: 'red',
        borderWidth: 2,
        marginTop: 10
    },
    head:{
        width:'100%',
        height:80,
        borderColor: 'green',
        borderWidth: 2,
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
        marginTop: 23,
        marginLeft: 30,
        fontSize: 15
    },
    zhengwen: {
        marginLeft: width * 0.025,
        width: width * 0.95,
        height: 270,
        borderWidth: 2,
        borderColor: 'black',
        paddingLeft: 15,
        paddingTop: 10
    },
    dibu: {
        marginLeft: width * 0.025,
        width: width * 0.95,
        height: 40,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'blue'
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
        borderWidth: 2,
        borderColor: 'blue'
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
        marginTop: 23,
        marginLeft: 20,
        fontSize: 13
    },
    pltext:{
        marginTop: -10,
        marginLeft: 20,
        fontSize: 14
    }
})