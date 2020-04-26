import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ToastAndroid, TextInput, StatusBar,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class NongList extends Component {
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
            <Text style={styles.bigtitle}>大田作物种植</Text>
            <View style={styles.everyitem}>
              <TouchableOpacity  onPress={() => Actions.nongdetail()} >
                <Text style={styles.everytitle}>机插水稻的早期田间管理技术</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => Actions.nongdetail()} >
                <Text style={styles.everytitle}>小麦返青后追肥要“三看”</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => Actions.nongdetail()} >
                <Text style={styles.everytitle}>洼地催芽种 玉米保全苗</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.bigtitle}>蔬菜</Text>
            <View style={styles.everyitem}>
              <Text style={styles.everytitle}>早春番茄育苗注意</Text>
              <Text style={styles.everytitle}>如何培育可使蔬菜苗齐苗壮</Text>
              <Text style={styles.everytitle}>夏季蔬菜育苗的注意事项</Text>
            </View>
          </View>
          <View>
            <Text style={styles.bigtitle}>果树</Text>
            <View style={styles.everyitem}>
              <Text style={styles.everytitle}>葡萄科学补钙，提高果实品质</Text>
              <Text style={styles.everytitle}>西瓜施硼产量高</Text>
              <Text style={styles.everytitle}>草莓花果期的管理</Text>
            </View>
          </View>
          <View>
            <Text style={styles.bigtitle}>食用菌</Text>
            <View style={styles.everyitem}>
              <Text style={styles.everytitle}>烹调佳品——香菇快餐汤料</Text>
              <Text style={styles.everytitle}>菇床的冬季管理</Text>
              <Text style={styles.everytitle}>草菇死亡原因及防治对策</Text>
            </View>
          </View>
          <View>
            <Text style={styles.bigtitle}>中草药种植</Text>
            <View style={styles.everyitem}>
              <Text style={styles.everytitle}>中草药繁育三种方法</Text>
              <Text style={styles.everytitle}>药用植物甘草栽培技术</Text>
              <Text style={styles.everytitle}>地黄种植技术</Text>
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