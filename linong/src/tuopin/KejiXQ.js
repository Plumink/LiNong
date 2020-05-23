import React, { Component } from 'react'
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class KejiXQ extends Component {
    render() {
        return (
          
            <View style={{backgroundColor:'#ffffff',width:'100%',height:'100%'}}>
            <TouchableOpacity onPress={()=>Actions.pop()}>
                <View>
                    <Image style={{width:'3.2%',marginTop:20,marginBottom:20,marginLeft:20}} source={require('../tu/011.png')}/>
                </View>
            </TouchableOpacity>
            <ScrollView>
            <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5'}}>

            </View>
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【科技扶贫】何为科技扶贫？</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/k01.jpg')}/>
                    </View>
                    <View style={{height: 600,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         科技扶贫是由单纯救济式扶贫向依靠科学技术开发式扶贫转变的一个重要标志。其宗旨是应用适用的科学技术改革贫困地区封闭的小农经济模式，提高农民的科学文化素质，提高其资源开发水平和劳动生产率，促进商品经济发展，加快农民脱贫致富的步伐。
1986年，科技扶贫是国家科委提出并组织实施的一项在农村进行的重要的反贫困举措，是中国政府开发扶贫的重要组成部分。
                        </Text>
                        <Text style={{fontSize:17}}>         科技扶贫是针对贫困地区生产技术落后和技术人员缺乏的状况提出的。
一是强调自我发展。以市场为导向，以科技为先导，引导贫困地区合理开发资源，将资源优势转化为经济优势，同时努力提高贫困农民参与市场竞争的能力，实现自我发展的良性循环。
二是注重引进成熟、适用的技术。农业技术具有强烈的地域性和适应性，科技扶贫在向贫困地区引进技术时，必须是成熟技术，而且要适合贫困地区的实际情况。
三是注重将治穷与治愚相结合。科技扶贫通过农业、科研、教育三结合等形式，一方面建立健全科技示范网络、组织开展各种类型的培训；另一方面建立全国农村科普网络，大力开展科普宣传，弘扬科学精神，提高农民素质。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
        )
    }
}


