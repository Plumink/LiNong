import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList
} from 'react-native';



const {width, scale} = Dimensions.get('window');
/** 450   2 */
const s = width / 640;



export default class GoodsVeg extends Component {

    constructor(){
        super();
        this.state = {
            content:{}
        }
    }

    componentDidMount(){
        this.getFruit();
    }

    getFruit = () => {
        fetch('http://175.24.100.139:8081/getVeg')
            .then((res)=>res.json())
            .then(
                data => {
                    this.setState({
                        content:data
                    })
                }
            )
    }

    
    render() {
        if(this.state.content[0]){
            console.log(this.state.content);
            return (
                <ScrollView>
                    {/* 搜索和定位 */}
                    <View style={styles.header_search}>
       
                        <TouchableOpacity onPress={()=>Actions.shop()}>
                            <View style={{width:50*s,height:50*s,top:26*s}}>
                                <Icon name='md-arrow-round-back' size={35} style={{
                                    position:'absolute',
                                    // top:27*s,
                                    left:18*s,
                                    opacity:0.7
                                }}/>
                            </View>
                        </TouchableOpacity>
    
                        <View style={styles.header_s1}>
                            <Icon name='md-search' size={30} style={{
                                color:'rgb(23,94,12)',
                                left:25*s,
                                top:5*s
                            }}/>
                            <TextInput
                                placeholder='请输入您要搜索的产品关键字'
                                style={{
                                    width:'70%',
                                    height:50*s,
                                    left:60*s,
                                    top:-38*s,
                                    fontSize:19*s,
                                    fontWeight:'light',
                                    color:'#eee'
                                }}
                            />
                            <TouchableOpacity>
                                <View style={styles.header_s2}>
                                    <Text style={styles.header_s3}>搜 索</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 具体分类内容 */}
                    <View style={{width:'100%',backgroundColor:'#f8f8ff'}}>
                        <FlatList
                            data={this.state.content}
                            numColumns={1}
                            renderItem={
                                ({item})=>{
                                    return(
                                        <View style={{width:'100%',height:249*s,backgroundColor:'#fffafa',marginTop:5*s,}}>
                                            <TouchableOpacity>
                                                <Image source={{uri:item.imgs}} style={{width:230*s,height:230*s,borderRadius:20*s,marginTop:10*s,marginLeft:10*s}}/>
                                            </TouchableOpacity>                                          
                                            <Text style={{position:'absolute',left:270*s,top:30*s,fontSize:23*s}}>{item.title}</Text>
                                            <Text style={{position:'absolute',left:270*s,top:70*s,fontSize:20*s,color:'gray'}}>{item.goodslimit}</Text>
                                            <Text style={{position:'absolute',left:420*s,top:70*s,fontSize:18*s,color:'gray'}}>{item.update}</Text>
                                            <Text style={{position:'absolute',left:280*s,top:110*s,fontSize:27*s,color:'red'}}>{item.money}</Text>
                                            <Text style={{position:'absolute',left:270*s,top:160*s,fontSize:19*s,color:'gray'}}>地址: {item.address}</Text>
                                            <Text style={{position:'absolute',left:420*s,top:160*s,fontSize:19*s,color:'gray'}}>{item.author}</Text>
                                            <Text style={{position:'absolute',left:270*s,top:200*s,fontSize:17*s,color:'gray'}}>运输方式: {item.transport}</Text>
                                        </View>
                                    )
                                }
                            }
                        />
                    </View>
                    

                </ScrollView>
            )
        }
        else{
            return (
                <ScrollView>
                    {/* 搜索和定位 */}
                    <View style={styles.header_search}>
       
                        <TouchableOpacity onPress={()=>Actions.shop()}>
                            <View style={{width:50*s,height:50*s,top:26*s}}>
                                <Icon name='md-arrow-round-back' size={35} style={{
                                    position:'absolute',
                                    // top:27*s,
                                    left:18*s,
                                    opacity:0.7
                                }}/>
                            </View>
                        </TouchableOpacity>
    
                        <View style={styles.header_s1}>
                            <Icon name='md-search' size={30} style={{
                                color:'rgb(23,94,12)',
                                left:25*s,
                                top:5*s
                            }}/>
                            <TextInput
                                placeholder='请输入您要搜索的产品关键字'
                                style={{
                                    width:'70%',
                                    height:50*s,
                                    left:60*s,
                                    top:-38*s,
                                    fontSize:19*s,
                                    fontWeight:'light',
                                    color:'#eee'
                                }}
                            />
                            <TouchableOpacity>
                                <View style={styles.header_s2}>
                                    <Text style={styles.header_s3}>搜 索</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )
        }
        
    }
}

const styles = StyleSheet.create({
     // 顶部搜索
     header_search:{
        height:100*s,
        backgroundColor:'#FFFAF0'
    },
    header_s1:{
        width:'84%',
        height:'60%',
        fontSize:15,
        borderRadius:40*s,
        borderWidth:2.5*s,
        borderColor:'rgb(76,196,149)',
        position:'absolute',
        top:20*s,
        left:70*s,
        backgroundColor:'white'
    },
    header_s2:{
        width:'15%',
        height:42*s,
        left:430*s,
        top:-85*s,
        borderRadius:20*s,
        backgroundColor:'rgb(76,196,149)'
    },
    header_s3:{
        fontSize:20*s,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
        top:6*s
    },


})