import React, { Component } from 'react';
import { Text, View , StyleSheet ,Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window')

export default class Zhengce extends Component{
    constructor(){
        super();
        this.state={
            test:[{Title:'aaa'}],
            te:80
        }
    }
    componentDidMount(){
        fetch('http://175.24.100.139:8080/').then(res=>res.json())
        .then((res)=>{
            console.log(res)
            this.setState({
                test:res
            })
        })
        console.log(this.state.test)
    }
    f = () =>{
        console.log(2)
        fetch('http://175.24.100.139:8080/').then(res=>res.json())
        .then((res)=>{
            this.setState({
                test:res,
                te:50
            })
        })
        console.log(this.state.te)
    }
    render() {
        return (
             <View>
                <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>Title</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>Contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </View>
                    <Image style={styles.img} source = {require('./gris.jpg')}></Image>
                </View>
                <View style={styles.box}>
                    <View style={styles.text}>
                        <Text style={styles.title}>Title</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>Contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </View>
                    <Image style={styles.img} source = {require('./gris.jpg')}></Image>
                </View>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:130,
        borderWidth:2,
        borderColor:'green',
        marginTop:15,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    text:{
        width:0.7*width,
        height:126,
    },
    img:{
        width:0.3*width,
        height:126,
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10
    },
    content:{
        marginLeft:15,
        marginTop:10,
        marginRight:15,
        textAlign:'left'
    }
})
