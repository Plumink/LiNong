import React, { Component } from 'react'
import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class KejiXQ1 extends Component {
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
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【科技扶贫】科大讯飞响应全国两会号召：科技扶贫 推动脱贫攻坚迈上新台阶</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/k02.jpg')}/>
                    </View>
                    <View style={{height: 600,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         2020年，扶贫攻坚进入最紧要的关头。《政府工作报告》中提出，脱贫是全面建成小康社会必须完成的硬任务，要在就业地稳岗就业，要支持扶贫产业恢复发展。全国人大代表、科大讯飞董事长刘庆峰提出：对于“脱贫攻坚”和“精准扶贫”，既要解决“就业”，更要解决“产业”。人工智能不仅是国家新基建战略的主力军，也是扶贫攻坚的生力军，帮助基层群众全面提升获得感和幸福感，助力国家2020年打赢脱贫攻坚战。


                        </Text>
                        <Text style={{fontSize:17}}>         科大讯飞积极响应号召，发力“技术扶贫、就业扶贫、教育扶贫、医疗扶贫、推普脱贫”五个方面，依托人工智能等新技术手段，推动脱贫攻坚工作迈上一个新的台阶。

其中，“技术扶贫”通过人工智能技术，“让盲人听得见文字,让聋人看得见声音”。2017年科大讯飞发起“三声有幸”扶贫计划，通过人工智能技术，“让盲人听得见文字,让聋人看得见声音”，对特殊人群开发团队投入技术、服务等资源达2000万，免费为视障、听障等公益人群在阅读、聊天、社交等场景提供超过5000万次/日的语音服务，累计支持1000多家开发无障碍应用的创业团队，实现“技术扶贫”。

“教育扶贫”，“扶贫必扶智”。贫困地区的教育水平是扶贫攻坚战中的最短板，科大讯飞让人工智能走进偏远山区补齐短板，助力乡村教育公平而有质量的发展，促进教育资源均衡。如今，科大讯飞的A.I.教育公益计划至今已陆续走进云南、贵州、四川等50多所学校，完成超过 800 万元捐赠活动。

面对相对薄弱的医疗资源和广大群众日益提高的就医健康需求，科大讯飞用人工智能普惠基层医疗，为基层医生提供人工智能辅助诊疗服务，完成“医疗扶贫”计划。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
        )
    }
}


