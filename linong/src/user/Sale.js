import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Grid,WhiteSpace, WingBlank } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Sale extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.total}>
                    
                    <View style={styles.head}>
                        <WingBlank style={styles.head}>
                            <WhiteSpace/>
                                <Icon name="arrowleft" size={20} onPress={()=>Actions.U()}/>
                                <Text style={styles.title}>我要卖货</Text>
                        </WingBlank>
                    </View>
                    <WhiteSpace/>
                    <WingBlank>
                        <View style={styles.first}>
                            <WingBlank>
                                <View style={styles.second}>
                                    <Text style={styles.one}>标题</Text>
                                    <TextInput  style={styles.input}></TextInput>
                                </View>
                                <View style={styles.second}>
                                    <Text style={styles.one}>类目</Text>
                                    <TextInput  style={styles.input}></TextInput>
                                </View>
                                <View style={[styles.photo,{borderStyle:"dotted"}]}>
                                    <Text style={{fontSize:70*s,color:'grey',lineHeight:100*s,textAlign:'center'}}>+</Text>
                                </View>
                                <View style={styles.line}></View>
                                <View>
                                    <Text>河北省衡水市景县</Text>
                                </View>
                            </WingBlank>
                        </View>
                    </WingBlank>
                    <WhiteSpace/>
                    <WingBlank>
                        <View style={styles.first}>
                            <WingBlank>
                                <View style={styles.second}>
                                    <Text style={styles.one}>价格</Text>
                                    <TextInput  style={styles.input}></TextInput>
                                </View>
                                <View style={styles.second}>
                                    <Text style={styles.one}>联系方式</Text>
                                    <TextInput  style={styles.input_another}></TextInput>
                                </View>
                                <View style={styles.second}>
                                    <Text style={styles.one}>物流</Text>
                                    <TextInput  style={styles.input}></TextInput>
                                </View>
                                <View style={styles.second}>
                                    <Text style={styles.one}>详情</Text>
                                    <TextInput multiline={true}  style={styles.input3}></TextInput>
                                </View>
                            </WingBlank>
                        </View>
                    </WingBlank>
                </View>
                <TouchableOpacity style={styles.con}>
                    <Text style={styles.confirm}>确认发布</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    total: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    head: {
        marginTop: 10*s,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: 250*s,
        color:'grey',
        fontSize: 20*s
    },
    first: {
        backgroundColor:'white',
        height:400*s,
        borderRadius: 10*s
    },
    one: {
        marginTop: 30*s,
        fontSize: 20*s
    },
    second: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        borderRadius: 10*s
    },
    input: {
        width: 500*s,
        marginTop: 10*s,
        marginLeft: 10*s,
        borderStyle: 'solid',
        borderWidth: 1*s,
        fontSize: 20*s,
        borderRadius: 10*s
    },
    input_another: {
        width: 460*s,
        marginTop: 10*s,
        marginLeft: 10*s,
        borderStyle: 'solid',
        borderWidth: 1*s,
        fontSize: 20*s,
    },
    input3: {
        width: 500*s,
        height:170*s,
        marginTop: 10*s,
        marginLeft: 10*s,
        borderStyle: 'solid',
        borderWidth: 1*s,
        fontSize: 20*s,
        borderRadius: 10*s
    },
    photo: {
        width: 100*s,
        height: 100*s,
        // backgroundColor: 'red',
        marginTop: 10*s,
        // borderStyle: 'dotted',
        borderWidth: 0.5*s,
        borderStyle:'dotted'
    },
    confirm: {
        fontSize: 30*s,
        color: 'white',
        marginLeft: 30*s,
        marginTop: 4*s
    },
    con: {
        width: 180*s,
        height:50*s,
        backgroundColor: '#62D4A6',
        marginLeft: 220*s,
        marginTop: 70*s
    },
    line: {
        borderWidth: 1*s,
        borderColor: 'grey',
        marginTop: 100*s,
    },
})
