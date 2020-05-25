import React, { Component } from 'react'
import { View, Text,Image,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Xinwen4 extends Component {
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
                <Text style={{fontSize:25,fontWeight:'300',marginTop:40,marginLeft:'6%'}}>【扶贫热点】扶贫路上的那些事</Text>
                <View style={{width:'90%',height:250}}>
                    <Image style={{width:'100%',height:250,marginLeft:'6%',marginTop:30}} source={require('../tu/t04.jpg')}/>
                    </View>
                    <View style={{height: 800,borderWidth: 1,borderColor: 'white',paddingLeft: 15,paddingRight:5,top:30,paddingTop: 8}}>
                        <Text style={{fontSize:17}}>         经常有同事和朋友问我：“你们这些干部在村里扶贫都干了些什么，有效果吗？”对此，我曾也心存疑虑。经过将近半年来的驻村扶贫工作，我可以很肯定的
                        回答他们：“我们驻村干部做了很多实事，不说成绩有多显著，但至少让我们所驻的沿山镇和平村的贫困户都基本上享受到了党和国家的扶贫政策！”
                        </Text>
                        <Text style={{fontSize:17}}>         针对每户贫困户，该村驻村扶贫干部都要设身处地为他们着想，设想如果我们是他家中的一员，那么自己家有哪些困难、需要什么、需要扶贫干部为自己做什么。要时刻站在贫困户的位置来考虑问题，再以帮扶干部的身份来寻求解决问题的办法。 经过近半年来的长相处，和平村的贫困户已经慢慢进入了脱退行列。然而却有一户一直让我难以平静,这一户的画面情况只有在电影电视里才看得见，屋里厨房里是黑乎乎的锅灶,边上放着一个没有了盖的水壶,是用来装水的;床上杂乱摊着黑乎乎的最少得二、三十年的被褥;除了黑乎乎的老式的木头床外,没有见到任何家具和电器……整个屋子给人的整体感觉就是脏兮兮乱糟糟的,很贫苦、很压抑、也很艰辛。这就是在该驻村干部村里见到的最贫困的一户人家，这老人50多岁了，左手残疾，一个人生活，无儿无女。因为有一支手是残疾的，家里的衣服，被子从未洗过，由于长时间的不动手洗，根本都不知道咋洗衣服，新衣服直接穿烂都不会洗一次。这样，不仅会引起生病，对个人的外表形象影响极度糟糕，村里的人看着他都绕开走。在驻村期间，我们不仅教会了他打理自己的卫生，也教会了他打理家里的卫生，整个人像变了一个人似的，也学会了去做简单的零工了。

现在, 我们能做的就是尽已所能,为这些真正需要帮助的人尽一点力。哪怕是一个盛水的桶、买一两张櫈子、一件御寒的衣裤、一套半新的被褥、帮忙贴一小块漏风的墙壁、帮忙整理一下家里用物的摆放和卫生，都会给那些没有任何生活来源和不会打理卫生的人送去一丝温暖。
                        </Text>
                    </View>
                    </ScrollView>
            </View>
          
        )
    }
}


