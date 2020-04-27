import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const { width } = Dimensions.get('window')

export default class Jingyan extends Component {
    render() {
        return (
            <View>
                <View style={styles.head}>
                    <Text style={styles.l}>|</Text>
                    <Text style={styles.jy}>经验之谈</Text>
                </View>
                <TouchableOpacity onPress={()=> Actions.jx()}>
                    <View style={styles.body}>
                        <View style={styles.yh}>
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
                </TouchableOpacity>
                <Button
                    onPress={() => Actions.fb()}
                    style={{
                        width: 100, height: 40,
                        borderRadius: 20,
                        textAlignVertical: 'center',
                        backgroundColor: 'red',
                        color: '#fff'
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
        height: 45,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'grey',
        flexDirection: 'row',
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
        marginTop: 11
    },
    body: {
        width: '100%',
        height: 280,
        borderWidth: 2,
        borderColor: 'green',
        marginTop: 10
    },
    yh: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderColor: 'red',
        flexDirection: 'row'
    },
    touxiang: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 3,
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
        height: 170,
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
    }
})