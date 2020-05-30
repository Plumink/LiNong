import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList
} from 'react-native';


const { width, scale } = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class NongyeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: this.props.search,
            content: {}
        }
    }

    componentDidMount() {
        // console.log(this.state.searchValue)
        this.searchRes();
    }

    searchRes = () => {
        fetch('http://175.24.100.139:8081/nongyesearch?key=' + this.state.searchValue)
            .then((res) => res.json())
            .then(
                res => {
                    // console.log(res[0])
                    this.setState({
                        content: res
                    })
                }
            )
    }

    render() {
        if (this.state.content[0]) {
            return (
                <View style={{ flex: 1, backgroundColor: 'white', width: '100%' }} hideTabBar={true}>
                    {/* top */}
                    <View style={styles.top}>
                        <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 30 * s }} />
                        <View style={styles.header}>
                            <View style={styles.search}>
                                <Text style={{ fontSize: 20 }}>农业</Text>
                                <View style={styles.header_s1}>
                                    <Icon1 name='md-search' size={25} style={{
                                        color: 'rgb(23,94,12)',
                                        left: 20 * s,
                                        top: 15 * s
                                    }} />
                                    <TextInput
                                        placeholder='请输入产品关键字'
                                        style={{
                                            left: 60 * s,
                                            top: -30 * s,
                                            fontSize: 19 * s,
                                            fontWeight: 'light',
                                            color: 'black'
                                        }}
                                        value={this.state.inputText}
                                        onChangeText={(text) => {
                                            this.setState({
                                                inputText: text
                                            })
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={styles.header_s2}
                                    onPress={() => {
                                        Actions.nongsearch({ 'search': this.state.inputText });
                                        this.setState({
                                            inputText: ''
                                        })
                                    }}>
                                    <Text style={styles.header_s3}>搜 索</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '10%' }}></View>
                    </View>

                    {/* 搜索结果 */}
                        <View style={styles.everyitem}>
                            <ScrollView style={{ width: '100%', height: '60%' }}>
                                {
                                    this.state.content.map((item, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => Actions.nongdetail({ 'title': item.Title, id: item.NongyeID })} >
                                                <Text style={styles.everytitle}>{item.Title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                </View>
            )
        }
        else {
            return (
                <View style={{ flex: 1, backgroundColor: 'white', width: '100%' }} hideTabBar={true}>
                    {/* top */}
                    <View style={styles.top}>
                        <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 30 * s }} />
                        <View style={styles.header}>
                            <View style={styles.search}>
                                <Text style={{ fontSize: 20 }}>农业</Text>
                                <View style={styles.header_s1}>
                                    <Icon1 name='md-search' size={25} style={{
                                        color: 'rgb(23,94,12)',
                                        left: 20 * s,
                                        top: 15 * s
                                    }} />
                                    <TextInput
                                        placeholder='请输入产品关键字'
                                        style={{
                                            left: 60 * s,
                                            top: -30 * s,
                                            fontSize: 19 * s,
                                            fontWeight: 'light',
                                            color: 'black'
                                        }}
                                        value={this.state.inputText}
                                        onChangeText={(text) => {
                                            this.setState({
                                                inputText: text
                                            })
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={styles.header_s2}
                                    onPress={() => {
                                        Actions.nongsearch({ 'search': this.state.inputText });
                                        this.setState({
                                            inputText: ''
                                        })
                                    }}>
                                    <Text style={styles.header_s3}>搜 索</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '10%' }}></View>
                    </View>
                    {/* 搜索结果 */}
                    <ScrollView>
                        <Text>暂无数据</Text>
                    </ScrollView>
                </View>
            )
        }
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
    },
    header_s1: {
        width: '80%',
        height: 40,
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(76,196,149)',
        left: 30 * s,
        backgroundColor: 'white'
    },
    header_s2: {
        width: 80 * s,
        height: 42 * s,
        left: 60 * s,
        borderRadius: 20 * s,
        backgroundColor: 'rgb(76,196,149)'
    },
    header_s3: {
        fontSize: 20 * s,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        top: 6 * s
    },
    header: {
        width: '75%',
    },
    search: {
        height: 70 * s,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    everyitem: {
        width: '95%',
        backgroundColor: 'rgb(234, 255, 236)',
        marginBottom: 10 * s,
        marginLeft:15*s,
        marginTop:30
    },
    everytitle: {
        height: 47 * s,
        borderBottomWidth: 1 / 2,
        borderBottomColor: 'rgb(139, 139, 139)',
        fontSize: 15,
        textAlignVertical: 'center'
    }

})