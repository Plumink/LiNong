import React, { Component } from 'react'
import { View, Text,Image,ScrollView,Dimensions,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
const { width } = Dimensions.get('window')
export default class ZhengceXQ extends Component {
    render() {
        return (
          
            <View style={{backgroundColor:'#ffffff',width:'100%',height:'100%'}}>
            <TouchableOpacity onPress={()=>Actions.pop()}>
                <View>
                    <Image style={{width:'3.2%',marginTop:20,marginBottom:20,marginLeft:20}} source={require('../tu/011.png')}/>
                </View>
            </TouchableOpacity>
            <ScrollView>
            <View style={{width:'100%',height:'2%',backgroundColor:'#F5F5F5'}}>

            </View>
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【政策】2020年扶贫政策有哪些？</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/z01.jpg')}/>
                    </View>
                    <View style={{marginLeft: width * 0.025,width: '95%',height: 800,borderWidth: 1,borderColor: 'white',paddingLeft: 15,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>1、精准扶贫：根据不同地区的贫困情况、不同的家庭情况进行精准的帮扶，因地制宜的来帮助贫困地区脱贫。针对低保户、特困家庭、孤儿、乞讨人员为救助对象；在对残疾人相关的康复、技术培训和补贴方面也进行补贴款。
2、异地搬迁脱贫：对贫困地区进行搬迁工程，使搬迁后的居民的生活条件有明显的改善，在医疗、教育、交通等方面都能得到提升，同时确保搬迁后的贫困家庭有相应的工作来维持家庭收入。
3、教育扶贫：针对教育薄弱的地区，加大扶贫力度。到2020年增强贫困地区教育基础、完善教育体系，提高教育质量，使贫困地区的教育水平能达到全国的平均水平。
4、健康扶贫：改善贫困地区的医疗条件，提升健康服务，针对城乡居民医疗保险、大病救助、重特大疾病的医疗救助、医疗“一站式”平台的搭建等方面进行健康扶贫，基本完善医疗制度，能大幅度减少贫困地区的疾病。
                        </Text>
                        <Text style={{fontSize:17}}>5、光伏扶贫：部门贫困地区的光照条件好，通过对这些地区实施光伏扶贫，使大部分没有劳动力的贫困户年收入增收3000余元。
6、免费的职业培训：对贫困家庭的子女、或未受高等教育的毕业生提供免费的职业培训，为其创造条件。到2020年，使贫困家庭的劳动力能在人力资源市场得到技能的培训，使其具备为贫困家庭创造劳动力的条件。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
        )
    }
}


