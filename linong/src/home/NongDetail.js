import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image,ToastAndroid, TextInput, StatusBar, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class NongDetails extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(234, 255, 236, 0.712)', width: '100%' }} hideTabBar={true}>
                {/* top */}
                <ScrollView>
                <View style={styles.top}>
                    <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 10 * s }} />
                    <Text style={styles.header}>机插水稻的早期田间管理技术</Text>
                    <View style={{ width: '10%' }}></View>
                </View>
                {/* content */}
                <View style={styles.bigout}>
                    
                        <Text style={styles.title}>机插水稻的早期田间管理技术</Text>
                        <View>
                            <View style={styles.infor}>
                                <Image 
                                    source={require('../img/linong.png')}
                                    style={{
                                        height:60*s,
                                        width:60*s,
                                        borderRadius:35*s
                                    }}
                                />
                                <Text style={styles.username}>利农官方</Text>
                                <TouchableOpacity style={styles.collect}>
                                    <Text>+&nbsp;收藏</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.article}>&nbsp;&nbsp;&nbsp;&nbsp;
                                机插水稻是采用中小苗移栽，与常规手插秧比，其秧龄短，抗逆性较弱。但机插水稻的宽行浅栽，为低节位分蘖发生创造了有利环境。因此机插水稻的早期田间管理要稳定，保证早返青、早分蘖。
                            </Text>
                            <Image 
                                source={require('../img/jicha.png')}
                                style={{
                                    height:300*s,
                                    width:520*s,
                                    marginTop:5*s,
                                    marginBottom:5*s
                                }}
                            />
                            <Text style={styles.article}>&nbsp;&nbsp;&nbsp;&nbsp;
                                1、科学管水。机插时做到薄水栽插，机插结束后，要及时灌水护苗（阴雨天除外），灌水深以不淹没秧心为宜。插后3-4天进入薄水管理，切忌长时间深水，以免造成根系、秧心缺氧，形成水僵苗。秧苗根系下扎后即进入分蘖期，应实行浅水勤灌，灌水时以水深达3厘米左右为宜，待自然落干后再上水，如此反复，从而达到以水调肥、以水调气、以水促根、水气协调的目的。2、配方追肥。追肥要早，争取于插秧后1周内施完，用量占总施氮量的30%左右。3、综合防治病虫。水稻主要病虫有稻瘟病、纹枯病、赤枯病、螟虫、稻飞虱、叶蝉和稻纵卷叶螟等。一是通过选用良种，培育壮秧，抓好健身栽培来预防和减轻病虫的危害。二是根据植保站预测预报和结合田间调查进行及时防治。
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
        height: 70 * s,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5 * s,
        borderBottomWidth: 1 / 2,
        borderBottomColor: 'black',
        backgroundColor:'white'
    },
    header: {
        height: 70 * s,
        width: '80%',
        textAlignVertical: 'center',
        fontSize: 15
    },
    bigout: {
        width: '99%',
        height: '100%',
        paddingLeft:60*s,
        paddingRight:60*s
    },
    title:{
        color:'rgb(4, 102, 69)',
        fontSize:20,
        textAlign:'center',
        height:60*s,
        paddingTop:20*s,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(197, 202, 200)',
        marginBottom:15*s
    },
    infor:{
        width:'100%',
        height:60*s,
        marginBottom:10*s,
        flexDirection:'row',
        marginLeft:25*s
    },
    article:{
        lineHeight:26,
        fontSize:16
    },
    username:{
        fontSize:15,
        textAlignVertical:'center',
        marginLeft:10*s
    },
    collect:{
        backgroundColor:'white',
        width:100*s,
        height:40*s,
        borderRadius:20,
        marginLeft:210*s,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1/2,
        borderColor: 'rgb(4, 102, 69)',
        marginTop:7*s,
        
    }
})