import React, { Component } from 'react'
import { View, Text,Image,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Xinwen3 extends Component {
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
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【扶贫热点】打赢打好脱贫硬仗</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/t03.jpg')}/>
                    </View>
                    <View style={{height: 800,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         近日，总书记到山西考察时强调，脱贫攻坚是必须打赢打好的硬仗。“凡作事，将成功之时，其困难最甚。”打赢脱贫攻坚战这场硬仗，
                        兑现对人民的庄严承诺，必须要坚持精准脱贫方略，标准不变，目标不变，韧劲不减，求真求实。
                        要咬定目标不放松。脱贫攻坚的标准，就是稳定实现贫困人口“两不愁三保障”，不愁吃不愁穿，义务教育、基本医疗、住房安全有保障。在脱贫标准上，既不能脱离实际、拔高标
                        准、吊高胃口，也不能虚假脱贫、降低标准、影响成色。把握脱贫攻坚正确方向，确保目标不变、靶心不散，聚力解决绝对贫困问题，加大对非贫困县、贫困村内贫困人口的支持，
                        严格执行贫困县退出标准和程序，确保脱贫成果经得起历史检验。整治问题不手软。脱贫攻坚工作中存在的形式主义、官僚主义现象，影响脱贫攻坚有效推进。对群众反映的“虚假式”脱贫、“算账式”脱贫、“指标式”脱贫、“游走式”脱贫等问题，要高度重视并坚决克服，提高脱贫质量，做到脱真贫、真脱贫。
                        </Text>
                        <Text style={{fontSize:17}}>         责重一分，肩宽一尺。脱贫攻坚没有任何捷径可走，来不得半点小聪明、花架子，容不得一点腐败、懈怠，就得实打实、硬碰硬。只要
                        广大党员干部以昂扬的斗志、饱满的热情、旺盛的干劲，继续以实干的精神与智慧为脱贫开路，让脱贫攻坚与中国梦相互激荡，我们必定能打赢脱贫攻坚战，如期达成全面建成小康
                        社会的目标，实现共享发展的伟大创举。（作者：苏婷）
                        </Text>
                    </View>
                    </ScrollView>
            </View>
          
        )
    }
}


