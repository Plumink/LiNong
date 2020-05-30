import React,{Component} from 'react';
import { View, Text, Dimensions,StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class User extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <ScrollView>
                <View style={styles.total}>
                    <View style={styles.header}>
                        <Image style={styles.header}
                        source={require('./images/head.jpg')}>
                        </Image>
                        <View style={styles.img}>
                            <Image style={styles.img1}
                            source={require('./images/eee.jpg')}>
                            </Image>
                            <Text style={styles.img1_name}>游客4128</Text>
                            <Text style={styles.img1_name2}>182****4128</Text>
                        </View>
                    </View>
                    <WhiteSpace />
                    <View style={styles.add}>
                        <WingBlank>
                            <WhiteSpace size='xl'/>
                            <Text>我要发布</Text>
                            <View style={styles.square}>
                                <View>
                                    {/* <TouchableOpacity ></TouchableOpacity> */}
                                    <Text onPress={()=>Actions.one()} style={[styles.iconStyle,{color:'red',}]}>{'\ue620'}</Text>
                                    <Text>   卖货</Text>
                                </View>
                                <View style={styles.square_child}>
                                    <Text style={[styles.iconStyle,{color:'red',}]}>{'\ue61a'}</Text>
                                    <Text>  经验</Text>
                                </View>
                                <View style={styles.square_child}>
                                    <Text style={[styles.iconStyle,{color:'red',}]}>{'\ue702'}</Text>
                                    <Text>  收藏</Text>
                                </View> 
                                <View style={styles.square_child}>
                                    <Text style={[styles.iconStyle,{color:'red',}]}>{'\ue65d'}</Text>
                                    <Text>  打工</Text>
                                </View>
                            </View>
                        </WingBlank>
                    </View>   
                    <WhiteSpace />
                    <View style={styles.add}>
                        <WingBlank >
                            <WhiteSpace size='xl'/>
                            <Text>帮助中心</Text>
                            <View style={styles.square}>
                                <View>
                                    <Text style={[styles.iconStyle,{color:'green'}]}>{'\ue601'}</Text>
                                    <Text>联系客服</Text>
                                </View>
                            </View>
                        </WingBlank>
                    </View>
                    <View style={styles.out}>
                        <Text style={styles.out_text}>退 出 登 录</Text>
                    </View>
                </View>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        fontFamily: 'iconfont',
        fontSize: 24,
        lineHeight:40,
        marginLeft: 10
    },
    total: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    header: {
        width: '100%',
        height: 150*s,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    img: {
        width: 70*s,
        height: 70*s,
        borderRadius: 50,
        position: "absolute",
        left: 20*s,
        top: 30*s
    },
    img1: {
        width: 70*s,
        height: 70*s,
        borderRadius: 50,
    },
    img1_name: {
        width: 150*s,
        color: 'white',
        position: 'absolute',
        left: 80*s,
        top:15*s
    },
    img1_name2: {
        width: 150*s,
        color: 'white',
        position: 'absolute',
        left: 80*s,
        top:33*s
    },
    add: {
        width: '100%',
        height: 160*s,
        backgroundColor: 'white',
    },
    square: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    square_child: {
        marginLeft: 50*s
    },
    out: {
        width: 300*s,
        height: 50*s,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'grey',
        marginLeft: 180*s,
        marginTop: 400*s,
        borderRadius: 10
    },
    out_text: {
        textAlign: 'center',
        lineHeight: 50*s,
        color: 'red'
    }
})
