import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image,ToastAndroid, TextInput, StatusBar, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class MuDetails extends Component {
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
                    <Text style={styles.header}>牛的管理技术</Text>
                    <View style={{ width: '10%' }}></View>
                </View>
                {/* content */}
                <View style={styles.bigout}>
                        <Text style={styles.title}>牛的管理技术</Text>
                        <View>
                            <View style={styles.infor}>
                                <Image 
                                    source={require('../img/guanfang.png')}
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
                                培养牛，耐心，细心
                            </Text>
                            <Image 
                                source={require('../img/mud.png')}
                                style={{
                                    height:300*s,
                                    width:520*s,
                                    marginTop:5*s,
                                    marginBottom:5*s
                                }}
                            />
                            <Text style={styles.article}>&nbsp;&nbsp;&nbsp;&nbsp;
                            培养牛，耐心，细心
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