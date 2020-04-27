import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const { width, scale } = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Help extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.top}>
          <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 10 * s }} />
        </View>
        <TouchableOpacity onPress={() => Actions.helpDetails()}>
        <View style={styles.kuang}>
          <Image source={require('../img/mud.png')} style={styles.tu} />
          <View style={styles.wen}>
            <Text>xx县农用耕地机租赁小麦收割机</Text>
            <Text style={styles.money}>￥ 100/天</Text>
            <View style={styles.user}>
              <Image source={require('../img/guanfang.png')} style={styles.img1} />
              <Text>用户12345</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.kuang}>
          <Image source={require('../img/mud.png')} style={styles.tu} />
          <View style={styles.wen}>
            <Text>xx县农用耕地机租赁小麦收割机</Text>
            <Text style={styles.money}>￥ 100/天</Text>
            <View style={styles.user}>
              <Image source={require('../img/guanfang.png')} style={styles.img1} />
              <Text>用户12345</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.kuang}>
          <Image source={require('../img/mud.png')} style={styles.tu} />
          <View style={styles.wen}>
            <Text>xx县农用耕地机租赁小麦收割机</Text>
            <Text style={styles.money}>￥ 100/天</Text>
            <View style={styles.user}>
              <Image source={require('../img/guanfang.png')} style={styles.img1} />
              <Text>用户12345</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  kuang:{
    borderWidth:1,
    borderColor:'gray',
    flex:1,
    width:s*600,
    height:s*250,
    marginTop:30,
    marginBottom:30,
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tu:{
    width:s*280,
    height:s*200,
  },
  wen:{
    marginLeft:15,
  },
  money:{
    color:'red',
    fontSize:18,
    marginTop:30
  },
  user:{
    flexDirection: 'row',
    width:130,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:40
  },
})