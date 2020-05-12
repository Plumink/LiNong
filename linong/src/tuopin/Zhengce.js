import React, { Component } from 'react';
import { Text, View , StyleSheet ,Dimensions, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
const {width} = Dimensions.get('window')

export default class Zhengce extends Component{
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
                <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>【政策】2020年扶贫政策有哪些？</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>一、精准扶贫：根据不同地区的贫困状况...</Text>
                    </View>
                    <Image style={styles.img} source = {require('./gris.jpg')}></Image>
                    
                </View>
                <View style={styles.zhuanti}>
                        <Text style={{color:'#FC5D3B',left:5,top:-2}}>专题</Text>
                    </View>
                <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5',top:15}}>

            </View>
                <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>【政策】2020年扶贫政策有哪些？</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>一、精准扶贫：根据不同地区的贫困状况...</Text>
                    </View>
                    <Image style={styles.img} source = {require('./gris.jpg')}></Image>
                </View>
                <View style={styles.zhuanti}>
                        <Text style={{color:'#FC5D3B',left:5,top:-2}}>专题</Text>
                    </View>
                <View style={{width:'100%',height:15,backgroundColor:'#F5F5F5',top:15}}>

            </View>
            <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>【政策】2020年扶贫政策有哪些？</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>一、精准扶贫：根据不同地区的贫困状况...</Text>
                    </View>
                    <Image style={styles.img} source = {require('./gris.jpg')}></Image>
                </View>
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
        marginRight:15,
        textAlign:'left',
        fontSize:15
    }
})
