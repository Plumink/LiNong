import React, { Component } from 'react'
import { View, Text,Image,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Xinwen1 extends Component {
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
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【扶贫热点】精准施策推进就业扶贫</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/t01.jpg')}/>
                    </View>
                    <View style={{height: 800,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         为全面贯彻落实党中央和省、市关于做好疫情防控和促进经济社会发展的重要部署，落实保居民就业底线的任务，今年以来，敦煌市以实现有就业意愿贫
                        困劳动力应转尽转为目标，采取完善工作推进机制、搭建用工平台、优化就业服务、保证应保尽保等举措，全力以赴做好就业扶贫和社保扶贫工作，确保如期完成脱贫攻坚目标任务。
                        </Text>
                        <Text style={{fontSize:17}}>         当前，敦煌市共有精准扶贫建档立卡户1887户、6405人，其中建档立卡贫困劳动力3782人。截止目前，全市累计输转农村富余劳动力16535人，其中输转
                        贫困劳动力2000人。累计开展职业技能培训1066人次，其中开展农民职业技能培训9期390人，创业培训3期90人，为4家企业开展技能提升培训586人。全市累计发放再就业小额担保贷款168户，2479
                        万元，其中农村户口累计发放贷款102户、1053万元，为建档立卡户发放再就业小额贷款7户、95万元。另外，在强化技能培训提高贫困劳动力就业能力方面，敦煌市劳务办对全市的城乡富裕劳动力在
                        摸底调查了解培训意愿的基础上，根据富裕劳动力的技能需求，围绕产业发展，结合市场需求，分门别类地进行培训，建立了培训愿望与岗位需求的对接机制，有效地提高了技能培训的精准性。同时，
                        根据市场和企业需求，多层次、多渠道、多形式的开展了培训成果展示，努力实现培训一人、输转一人、就业一人的目标。下一步，敦煌市劳务办将根据中央、省市脱贫攻坚专项巡视“回头看”和国家
                        脱贫攻坚成效考核反馈意见要求，重点围绕就业扶贫方面存在的突出问题，细化措施、按期销号、抓好落实，确保高标准、高质量完成脱贫攻坚任务。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
          
        )
    }
}


