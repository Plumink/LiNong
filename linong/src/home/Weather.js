import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';


const { width, scale } = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Weather extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            date:'',
            nowtem:'',
            nowinfo:'',
            tomoday:'',
            tomonight:''

        }
    }
    // componentDidMount() {
    //     fetch('http://api.avatardata.cn/Weather/Query?key=6e6e3503d04a42b0bd2d8426224c2ca1&cityname=北京')
    //         .then(res => res.json())
    //         .then(res => {
    //             // console.log(res.result.weather[1])
    //             let today = res.result.realtime;
    //             let tomorrow = res.result.weather[1].info;
    //             // console.log(tomorrow);
    //             this.setState({    
    //                 date:today.date.slice(5)+" 星期"+res.result.weather[0].week + " 农历"+today.moon,
    //                 nowtem:today.weather.temperature+"°",
    //                 nowinfo:today.weather.info+" "+today.wind.direct+res.result.realtime.wind.power,
    //                 tomoday:tomorrow.day[2]+" "+tomorrow.day[1]+" "+tomorrow.day[3]+tomorrow.day[4],
    //                 tomonight:tomorrow.night[2]+" "+tomorrow.night[1]+" "+tomorrow.night[3]+tomorrow.night[4]
    //             });
    //         });
    // }


  render() {
    return (
      <View style={styles.weather}>
          <View style={styles.today}>
              <Text>{this.state.date}</Text>
              <Text>当前气温:{this.state.nowtem} </Text>
              <Text>{this.state.nowinfo}</Text>
          </View>
          <View style={styles.otherday}>
              <Text>明天</Text>
              <Text>白天:{this.state.tomoday}</Text>
            <Text>夜间:{this.state.tomonight}</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    weather:{
        marginTop:3,
        marginLeft:20,
        alignItems:'center',
        flexDirection:'row'
    },
    today:{
        width:'55%',
    
    },
    otherday:{
        width:'45%'
    }
})