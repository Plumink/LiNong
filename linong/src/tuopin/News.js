import React, { Component } from 'react'
import { View, Text,Image,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class News extends Component {
    render() {
        return (
          
            <View style={{backgroundColor:'#ffffff',width:'100%',height:'100%'}}>
            <TouchableOpacity onPress={()=>Actions.pop()}>
                <View>
                    <Image style={{width:20,height:20,marginTop:20,marginLeft:20}} source={require('../tu/011.png')}/>
                </View>
            </TouchableOpacity>
            <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5',top:15}}>

            </View>
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40}}>【扶贫热点】习近平总书记提出“精准扶贫”</Text>
                <View style={{width:480,height:250}}>
                    <Image style={{width:380,height:250,marginLeft:40,marginTop:30}} source={require('../tu/005.jpg')}/>
                    </View>
                    <View style={{height: 150,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         新华社北京11月28日电（齐声）2013年11月3日，习近平总书记来到湘西土家族苗族自治州花垣县排碧乡十八洞村，
                            同村干部和村民代表围坐在一起，亲切地拉家常、话发展，在这里他首次提出“精准扶贫”。习近平总书记表示，扶贫要
                            实事求是，因地制宜。要精准扶贫，切忌喊口号，也不要定好高骛远的目标。
                        </Text>
                        <Text style={{fontSize:17}}>         “让几千万农村贫困人口生活好起来，是我心中的牵挂。”习近平总书记多次对精准扶贫、精准脱贫作出重要指示。他指出，精准扶贫，就是要对扶贫对象
                            实行精细化管理，对扶贫资源实行精确化配置，对扶贫对象实行精准化扶持，确保扶贫资源真正用在扶贫对象身上、真正用在贫困地区。强调扶贫开发推
                            进到今天这样的程度，贵在精准，重在精准，成败之举在于精准。要做到“扶持对象精准、项目安排精准、资金使用精准、措施到户精准、因村派人精准、脱贫成效精准”。
                        </Text>
                    </View>
            </View>
        )
    }
}


