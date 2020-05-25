import React, { Component } from 'react';
import { Text, View , StyleSheet ,Dimensions, Image,TouchableOpacity} from 'react-native';
import { Actions,Scene } from 'react-native-router-flux';
const {width} = Dimensions.get('window')

export default class Fupin extends Component{
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
            <TouchableOpacity onPress={()=>Actions.kj()}>
                <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>【科技扶贫】</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>以科技园为载体,集聚技术、土地、资金、人才等生产要素...</Text>
                    </View>
                    <Image style={styles.img} source = {require('../tu/k01.jpg')}></Image>
                    
                </View>
                </TouchableOpacity>
                <View style={styles.zhuanti}>
                        <Text style={{color:'#FC5D3B',left:5,top:-2}}>专题</Text>
                    </View>
                <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5',top:15}}>

            </View>
            <TouchableOpacity onPress={()=>Actions.kj1()}>
                <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>【科技扶贫】</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>2020年，扶贫攻坚进入最紧要的关头。《政府工作报告》中提出，脱贫是全面建成小康社会必须完成的硬</Text>
                    </View>
                    <Image style={styles.img} source = {require('../tu/k02.jpg')}></Image>
                </View>
                </TouchableOpacity>
                <View style={styles.zhuanti}>
                        <Text style={{color:'#FC5D3B',left:5,top:-2}}>专题</Text>
                    </View>
                <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5',top:15}}>

            </View>
            <TouchableOpacity onPress={()=>Actions.kj2()}>
            <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>【科技扶贫】</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>开展马铃薯及小杂粮抗旱高产栽培技术示范与推广服务，
                        进一步推广应用新技术...</Text>
                    </View>
                    <Image style={styles.img} source = {require('../tu/k03.jpg')}></Image>
                </View>
                </TouchableOpacity>
                <View style={styles.zhuanti}>
                        <Text style={{color:'#FC5D3B',left:5,top:-2}}>专题</Text>
                    </View>
                <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5',top:15}}>

            </View>
             </View>
        );
    }
}
const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:150,
        borderWidth:2,
        borderColor:'white',
        marginTop:15,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    text:{
        width:0.7*width,
        height:126,
    },
    img:{
        width:'40%',
        height:162,
        top:7,
        left:-20
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10
    },
    zhuanti:{
        width: '10%',
        height: 20,
        borderWidth: 2,
        borderColor: '#FC5D3B',
        flexDirection: 'row',
        left:15,
        top:-10
    },
    content:{
        marginLeft:15,
        marginTop:10,
        marginRight:20,
        textAlign:'left',
        fontSize:15
    }
})
