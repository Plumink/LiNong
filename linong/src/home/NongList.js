import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ToastAndroid, TextInput, StatusBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class NongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: [],
      title2: [],
      title3: [],
      title4: [],
      inputText: '',
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

        {/* content */}
        <View style={styles.bigout}>
          <Text style={styles.bigtitle}>大田作物种植</Text>
          <View style={styles.everyitem}>
            <ScrollView style={{ width: '100%', height: 190 * s }}>
              {
                this.state.title1.map((item, index) => {
                  return (
                    <TouchableOpacity onPress={() => Actions.nongdetail({ 'title': item.Title, id: index })} >
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
                  this.state.title2.map((item, index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({ 'title': item.Title, id: index + 30 })} >
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
                  this.state.title3.map((item, index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({ 'title': item.Title, id: index + 60 })} >
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
                  this.state.title4.map((item, index) => {
                    return (
                      <TouchableOpacity onPress={() => Actions.nongdetail({ 'title': item.Title, id: index + 90 })} >
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