import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image, ToastAndroid, TextInput, StatusBar, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class NongDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: [],
            imgUrl:''
        }
    }

    componentDidMount() {
        fetch('http://175.24.100.139:8081/getNongyeContent?id=' + this.state.id)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                var contentarr = res[0].Content.split(res[0].Content[0] + res[0].Content[1]);
                // console.log(contentarr.length)
                // for (var i = 0; i < contentarr.length; i++) {
                //     console.log(contentarr[i])
                // }
                this.setState({
                    content: contentarr
                });
            });
        fetch('http://175.24.100.139:8081/getNongyeImgurl?id=' + this.state.id)
            .then(res => res.json())
            .then(res => {
                console.log('777777')
                // console.log(res);
                console.log(res[0].ImgUrl);
                this.setState({
                    imgUrl: res[0].ImgUrl
                });
            });
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(234, 255, 236, 0.712)', width: '100%' }} hideTabBar={true}>
                {/* top */}
                <View style={styles.top}>
                    <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 10 * s }} />
                    <Text style={styles.header}>{this.state.title}</Text>
                    <View style={{ width: '10%' }}></View>
                </View>
                {/* content */}
                <ScrollView style={styles.bigout}>
                    <Text style={styles.title}>{this.state.title}</Text>

                    <View style={styles.infor}>
                        <Image
                            source={require('../img/linong.png')}
                            style={{
                                height: 60 * s,
                                width: 60 * s,
                                borderRadius: 35 * s
                            }}
                        />
                        <Text style={styles.username}>利农官方</Text>
                        <TouchableOpacity style={styles.collect}>
                            <Text>+&nbsp;收藏</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={{uri:this.state.imgUrl}}
                        style={{
                            height: 300 * s,
                            width: 520 * s,
                            marginTop: 5 * s
                        }}
                    />
                    {
                        this.state.content.map((item, index) => {
                            return (
                                <Text style={styles.article}>&nbsp;&nbsp;&nbsp;&nbsp;{item}</Text>
                            )
                        })
                    }
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
        backgroundColor: 'white'
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
        paddingLeft: 60 * s,
        paddingRight: 60 * s
    },
    title: {
        color: 'rgb(4, 102, 69)',
        fontSize: 20,
        textAlign: 'center',
        height: 60 * s,
        paddingTop: 20 * s,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(197, 202, 200)',
        marginBottom: 15 * s
    },
    infor: {
        width: '100%',
        height: 60 * s,
        marginBottom: 10 * s,
        flexDirection: 'row',
        marginLeft: 25 * s
    },
    article: {
        lineHeight: 26,
        fontSize: 16,
        marginBottom: 15 * s
    },
    username: {
        fontSize: 15,
        textAlignVertical: 'center',
        marginLeft: 10 * s
    },
    collect: {
        backgroundColor: 'white',
        width: 100 * s,
        height: 40 * s,
        borderRadius: 20,
        marginLeft: 210 * s,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1 / 2,
        borderColor: 'rgb(4, 102, 69)',
        marginTop: 7 * s,

    }
})