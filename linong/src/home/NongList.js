import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ToastAndroid, TextInput, StatusBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class NongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: [],
      title2: [],
      title3: [],
      title4: []
    }
  }
  componentDidMount() {
    fetch('http://175.24.100.139:8081/getNongyeTitle')
      .then(res => res.json())
      .then(res => {
        this.setState({
          title1: res.slice(0, 30),
          title2: res.slice(30, 60),
          title3: res.slice(60, 90),
          title4: res.slice(90, 120),
        });
      });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', width: '100%' }} hideTabBar={true}>
        {/* top */}
          <View style={styles.top}>
            <Icon color='black' name='left' onPress={Actions.pop} size={23} style={{ marginTop: 20 * s, marginRight: 30 * s }} />
            <View style={styles.header}>
              
              <View style={styles.search}>
                <Text style={{fontSize:20}}>农业</Text>
                {/* <TextInput
                  placeholder='请搜索你想获得的信息'
                  style={{
                    width: '70%',
                    paddingLeft: 10 * s,
                    marginRight: 140 * s
                  }} />
                <Icon color='gray' name='search1' size={20} /> */}
              </View>
            </View>
            <View style={{ width: '10%' }}></View>
          </View>
          {/* content */}
          <View style={styles.bigout}>
            <Text style={styles.bigtitle}>大田作物种植</Text>
            <View style={styles.everyitem}>
              <ScrollView style={{ width: '100%', height: 190 * s }}>
                {
                  this.state.title1.map((item,index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({'title':item.Title,id:index})} >
                        <Text style={styles.everytitle}>{item.Title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
            </View>
            <View>
              <Text style={styles.bigtitle}>蔬菜</Text>
              <View style={styles.everyitem}>
              <ScrollView style={{ width: '100%', height: 190 * s }}>
                {
                  this.state.title2.map((item,index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({'title':item.Title,id:index+30})} >
                        <Text style={styles.everytitle}>{item.Title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
              </View>
            </View>
            <View>
              <Text style={styles.bigtitle}>果树</Text>
              <View style={styles.everyitem}>
              <ScrollView style={{ width: '100%', height: 190 * s }}>
                {
                  this.state.title3.map((item,index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({'title':item.Title,id:index+60})} >
                        <Text style={styles.everytitle}>{item.Title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
              </View>
            </View>
            <View>
              <Text style={styles.bigtitle}>中草药种植</Text>
              <View style={styles.everyitem}>
              <ScrollView style={{ width: '100%', height: 190 * s }}>
                {
                  this.state.title4.map((item,index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({'title':item.Title,id:index+90})} >
                        <Text style={styles.everytitle}>{item.Title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
              </View>
            </View>
          </View>
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
  },
  search: {
    height: 70 * s,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bigout: {
    width: '100%',
    paddingLeft: 40 * s,
    marginTop: 20 * s
  },
  bigtitle: {
    color: 'rgb(4, 102, 69)',
    fontSize: 20,
    marginBottom: 6 * s
  },
  everyitem: {
    width: '95%',
    backgroundColor: 'rgb(234, 255, 236)',
    marginBottom: 10 * s
  },
  everytitle: {
    height: 47 * s,
    borderBottomWidth: 1 / 2,
    borderBottomColor: 'rgb(139, 139, 139)',
    fontSize: 15,
    textAlignVertical: 'center'
  }
})