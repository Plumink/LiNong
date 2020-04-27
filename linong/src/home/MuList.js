import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ToastAndroid, TextInput, StatusBar,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class MuList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('https://www.baidu.com')
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', width: '100%'}} hideTabBar={true}>
        {/* top */}
        <ScrollView>
        <View style={styles.top}>
          <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 30 * s }} />
          <View style={styles.header}>
            <View style={styles.search}>
              <TextInput
                placeholder='请搜索你想获得的信息'
                style={{
                  width: '70%',
                  paddingLeft: 10 * s,
                  marginRight: 140 * s
                }} />
              <Icon color='gray' name='search1' size={20} />
            </View>
          </View>
          <View style={{ width: '10%' }}></View>
        </View>
        {/* content */}
        <View style={styles.bigout}>
          <View >
            <Text style={styles.bigtitle}>家禽</Text>
            <View style={styles.everyitem}>
              <TouchableOpacity  onPress={() => Actions.mudetails()} >
                <Text style={styles.everytitle}>春季鸡群防治办法有哪些？</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => Actions.mudetails()} >
                <Text style={styles.everytitle}>春季鸡群防治办法有哪些？</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => Actions.mudetails()} >
                <Text style={styles.everytitle}>春季鸡群防治办法有哪些？</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.bigtitle}>家畜</Text>
            <View style={styles.everyitem}>
              <Text style={styles.everytitle}>一头母牛可以繁殖几年，养殖管理要点有哪些？</Text>
              <Text style={styles.everytitle}>一头母牛可以繁殖几年，养殖管理要点有哪些？</Text>
              <Text style={styles.everytitle}>一头母牛可以繁殖几年，养殖管理要点有哪些？</Text>
            </View>
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
  },
  header: {
    height: 60 * s,
    width: '75%',
    borderBottomWidth: 1 / 2,
    borderBottomColor: 'black'
  },
  search: {
    height: 60 * s,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bigout:{
    width:'100%',
    paddingLeft:40*s,
    marginTop:20*s
  },
  bigtitle:{
    color:'rgb(4, 102, 69)',
    fontSize:20,
    marginBottom:5*s
  },
  everyitem:{
    width:'95%',
    backgroundColor:'rgb(234, 255, 236)',
    marginBottom:10*s
  },
  everytitle:{
    height:50*s,
    borderBottomWidth: 1/2 ,
    borderBottomColor: 'rgb(139, 139, 139)',
    fontSize:15,
    textAlignVertical:'center'
  }
})