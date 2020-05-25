import React, { Component } from 'react'
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class KejiXQ2 extends Component {
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
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【科技扶贫】科技扶贫项目对接 技术示范引领 助力科技扶贫</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/k03.jpg')}/>
                    </View>
                    <View style={{height: 600,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         4月29日~30日，根据科技部科技扶贫“百千万”工程要求，结合自治区深度贫困地区脱贫攻坚实施方案和自治区科技扶贫指导员项目任务书，宁夏大学农学院侯
                        贤清副教授入驻张易镇贺套村，开展马铃薯及小杂粮抗旱高产栽培技术示范与推广服务，进一步推广应用新技术，提高马铃薯及小杂粮的种植技术水平，促进农民增产增收。张易镇贺套村为国家深度扶贫村，
                        现有8个村民小组，总住户819户，3048人。其中建档绿卡户391户，1620人，占全村总数的50%以上。该村耕地总面积10150亩，其中退耕面积1485亩，牛存栏650头，羊存栏560头。主要种植作物有马铃薯、
                        冬小麦、胡麻、牧草、荞麦、大燕麦等，其中马铃薯种植面积达3500亩，冬小麦面积3600余亩，油料作物500亩，牧草种植1100亩，其他为小杂粮。
                        </Text>
                        <Text style={{fontSize:17}}>         通过调研，确定该村王海胜、杨红子、刘玉祥等7个马铃薯及小杂粮科技种植户，技术示范面积40亩，帮扶7户贫困人员就业，在每个村庄建立马铃薯及小杂粮抗旱
                        栽培技术示范，形成贺套村马铃薯及小杂粮示范试点。同时，驻村扶贫指导员就技术示范户提供相关扶持措施，对示范户提供相应的农资材料（地膜、种子和肥料等）和马铃薯及小杂粮种植技术指导。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
        )
    }
}


