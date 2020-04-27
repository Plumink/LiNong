import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image, ToastAndroid, TextInput, StatusBar, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class HelpDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.top}>
                    <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 10 * s }} />
                    <View style={styles.user}>
                        <Image source={require('../img/guanfang.png')} />
                        <Text>用户12345</Text>
                    </View>
                </View>
                <View style={{margin:20}}>
                    <Text style={styles.money}>￥ 100/天</Text>
                    <Text style={styles.wenzi}>xx县农用耕地机租赁 小麦收割稻谷收割</Text>
                    <Text style={styles.wenzi}>面向城市：石家庄</Text>
                    <Text style={styles.wenzi}>押金：1元</Text>
                    <Text style={styles.wenzi}>数量：1</Text>
                    <Text style={styles.wenzi}>最短租期：1年</Text>
                    <Text style={styles.wenzi}>付款要求：一天一付</Text>
                    <Text style={styles.wenzi}>各类温室特点：</Text>
                    <Text style={styles.wenzi}>该机型综合国内微型联合收割机的优点，采用双层割刀、气流清选，可一次完成收割、脱粒、清选、接粮等作业，
                    适用于丘陵、山区及平原套种小麦水稻的联合收割。该机型是为解决丘陵山区及套种地块不能进行联合收割的难题而专门的产品，
                    自产品定型批量生产以来，在河南、山西、陕西、甘肃、河北、山东等省的丘陵山区共推广销售2000多台，出口到越南、老挝、缅甸、
                    朝鲜斯里拉卡、孟加拉国、南非等 地区。彻底解决了丘陵山区小麦水稻不能联合收割的难题。深受广大用户的欢迎。
                    收割机械水稻小麦收割机 水稻小麦两用联合收割机 稻谷收割脱粒机</Text>
                    <View style={{flexDirection:'column',marginTop:20,justifyContent:'center',alignItems: 'center', }}>
                        <Image source={require('../img/mud.png')} />
                        <Image source={require('../img/mud.png')} />
                        <Image source={require('../img/mud.png')} />
                    </View>
                    <Text style={styles.wenzi}>联系方式：张先生 19842516635</Text>
                </View>
                <View style={{width:s*200,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
                    <Text style={styles.wenzi}>收藏</Text>
                    <Text style={styles.wenzi}>点赞</Text>
                    <Text style={styles.wenzi}>留言</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 70 * s,
        flexDirection: 'row',
        marginTop: 5 * s,
        borderBottomWidth: 1 / 2,
        borderBottomColor: 'black',
        backgroundColor: 'white'
    },
    user: {
        flexDirection: 'row',
        width: 130,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    money:{
        color:'red',
        fontSize:25,
        marginBottom:15
    },
    wenzi:{
        marginBottom:4,
        marginTop:3,
        fontSize:16
    }
})