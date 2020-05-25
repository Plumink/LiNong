import React, { Component } from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default class Pinglun extends Component {
    constructor() {
        super()
        this.state = {
            TextInputVal: ''
        }
    }
    TextChange = (inputData) => {
        console.log(inputData)
        this.setState({
            TextInputVal: inputData
        })
        console.log(this.state.TextInputVal)
    }
    Release = () => {
        let text = {
            content: this.state.TextInputVal
        }
        let a = JSON.stringify(text)
        fetch('http://175.24.100.139:8081/postExperience', {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: a
        }
        ).then(res => res.json())
            .then(
                data => {
                    if (data.success) {
                        ToastAndroid.show("发帖成功 !", ToastAndroid.BOTTOM);
                        Actions.pop()
                    } else {
                        ToastAndroid.show("发帖失败 !", ToastAndroid.BOTTOM);
                    }
                }
            )
    }
    render() {
        return (
            <View>
                <View style={styles.head}>
                    <Text style={styles.lr} onPress={() => Actions.pop()}>取消</Text>
                    <Text style={styles.title}>发布经验</Text>
                    <Text style={styles.lr} onPress={this.Release}>发布</Text>
                </View>
                <View style={styles.body}>
                    <TextInput
                        onChangeText={this.TextChange}
                        placeholder={'输入内容'}
                        placeholderTextColor={'#BBBBBB'}
                        multiline
                    ></TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        width: '100%',
        paddingTop: 12
    },
    lr: {
        fontSize: 13,
        color: 'grey'
    },
    title: {
        fontSize: 16
    },
    body: {
        borderTopWidth: 2,
        borderColor: 'green'
    }
})
