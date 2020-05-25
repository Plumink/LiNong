import React, { Component } from 'react'
import { View, Text,Image,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Xinwen2 extends Component {
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
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【扶贫热点】就业扶贫“点对点”“门到门” 助力甘肃清水贫困群众脱贫增收</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/t02.jpg')}/>
                    </View>
                    <View style={{height: 800,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         不久前，经过1400多公里的长途跋涉，27名甘肃省清水县的建档立卡贫困户赴津务工人员通过“点对点”“门到门”的直达运输服务，乘坐专车来到河北区。这种贴心、暖心、周到细致的服务模式，使得他们不需要隔离，就能立即走上新的工作岗位，推动企业复工复产。清水县务工人员在服务河北区经济社会发展的同时，也源源不断地给清水县带来了致富信息、带来了先进理念，为脱贫增收奠定了坚实基础。

　　面对疫情对劳务输出的冲击和影响，河北区进一步加强与清水县的劳务协作，打造防疫期间“就业服务不打烊，网上招聘不停歇”的线上春风行动。为务工者开展岗前引导性培训、健康检查、定期走访慰问、返岗包车等服务，有序输转建档立卡贫困户赴津稳定就业。截至目前，新增来津就业人员22人，返岗复工38人。
                        </Text>
                        <Text style={{fontSize:17}}>         据河北区人力资源和社会保障局局长李志雄介绍，下一步，河北区将对赴津务工人员上岗入职情况进行跟踪掌握，帮助用人单位解决用工缺工问题，继续做好“点对点”服务保障工作，在抓好防疫的同时，携手清水县一同推进复工复产。

　　据了解，2019年河北区为对口的玛曲县和清水县两县拨付财政帮扶资金6688万元，其中用于扶持产业发展资金占比达到61%，全区的消费扶贫总金额高达5000万元。截至目前，河北区已引导5家企业到结对县玛曲县和清水县投资，实际投资额3165万元，吸纳就业带动贫困人口3721人。按照“结对县所需、河北区所能”的要求，在各领域总共开展了47个帮扶项目，实现带贫11745人。为了引导群众就业，组建技能培训工作小组，开展职业技能培训13期747人次，并邀请专家进行创业分享会，开展创业致富带头人培训170人次，116人创业成功，引导结对县贫困人口到我市及其他地区就业2000余人。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
          
        )
    }
}


