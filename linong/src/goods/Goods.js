import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import geolocation from "@react-native-community/geolocation"

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

const content = [
    {
        img:{uri:'https://s1.ax1x.com/2020/05/23/YvGPL4.png'}
    },
    {
        img:{uri:'https://s1.ax1x.com/2020/05/23/YvGGFI.png'}
    },
    {
        img:{uri:'https://s1.ax1x.com/2020/05/23/YvGJYt.png'}
    },
    {
        img:{uri:'https://s1.ax1x.com/2020/05/23/YvGYfP.png'}
    },
    {
        img:{uri:'https://s1.ax1x.com/2020/05/23/YvGdOg.png'}
    },
    {
        img:{uri:'https://s1.ax1x.com/2020/05/23/YvGBwj.png'}
    }
]

export default class Goods extends Component{
    constructor(){
        super();
        this.state = {
            longitude:'',
            latitude:'',
            city:'',
            inputText:'',
            fruitCon:'',
            vegCon:'',
            treeCon:'',
            cowCon:'',
            fishCon:''
        }
    }
    componentDidMount(){
        this.getPosition();
        this.getFruit();
        this.getFish();
    }


    getPosition = () => {
        geolocation.getCurrentPosition(
            location => { 
                fetch('http://api.map.baidu.com/reverse_geocoding/v3/?ak=C11a1glnS4HZ9tGQQHbTV3klRc9Gx8Hr&output=json&coordtype=wgs84ll&location='+location.coords.latitude+','+location.coords.longitude)
                    .then((res)=>res.json())
                    .then((res)=>{
                        this.setState({
                            city:res.result.addressComponent.city
                        })
                    })
            },
            error => {
                console.log(error);
            }
        )
    }

    getFruit = () => {
        fetch('http://175.24.100.139:8081/getFruit')
            .then((res)=>res.json())
            .then(
                data => {
                    console.log(data[0].address);
                    // console.log(typeof(data[0]))
                }
            )
    }
    
    getVeg = () => {
        fetch('http://175.24.100.139:8081/getVeg')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
            })
    }

    getTree = () => {
        fetch('http://175.24.100.139:8081/getTree')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
            })
    }
    getCow = () => {
        fetch('http://175.24.100.139:8081/getCow')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
            })
    }
    getFish = () => {
        fetch('http://175.24.100.139:8081/getFish')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
            })
    }

    render(){
        console.log(this.state.city);
        console.log(this.state.inputText);
        return (
            <ScrollView style={{height:2150*s}}>
                <View style={{height:650*s}}>
                     {/* 搜索和定位 */}
                    <View style={styles.header_search}>
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
                                    color:'black'
                                }}
                                value={this.state.inputText}
                                onChangeText={(text)=>{this.setState({
                                    inputText:text
                                })}}
                            />
                            
                            <View style={styles.header_s2}>
                                <TouchableOpacity
                                 onPress={()=>{
                                    Actions.search({param1:this.state.inputText});
                                    this.setState({
                                        inputText:''
                                    })
                                }}>
                                    <Text style={styles.header_s3}>搜 索</Text>
                                </TouchableOpacity>  
                            </View>
                            
                            
                            
                            <Icon1 name='caretdown' size={30} style={{
                                color:'black',
                                fontSize:30*s,
                                left:545*s,
                                top:-135*s
                            }}/>
                            <Text style={styles.header_s4}>{this.state.city}</Text>
                        </View>
                    </View>

                    {/* 轮播 */}
                    <View style={{width:'100%',height:300*s}}>
                        <Swiper autoplay={true} style={{padding:0}} showsPagination={false}>
                            <Image source={{uri:'https://s1.ax1x.com/2020/05/23/YxBGex.png'}}  style={{height:'120%',width:'100%'}}/>
                            <Image source={{uri:'https://s1.ax1x.com/2020/05/23/YxBUYD.jpg'}} style={{height:'120%',width:'100%'}}/>
                            <Image source={{uri:'https://s1.ax1x.com/2020/05/23/YxB6Tf.jpg'}} style={{height:'120%',width:'100%'}}/>
                        </Swiper>
                    </View>
                    <View style={{height:20*s,width:'100%',backgroundColor:'#FFFAF0'}}></View>

                    
                    {/* 分类 */}
                    <View style={styles.sort_s1}>
                        <View style={styles.sort_s2}>
                            <TouchableOpacity onPress={()=>Actions.fruit()}>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv1dOJ.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={styles.sort_s6}>水果</Text>
                        </View>
                        <View style={styles.sort_s2}>
                            <TouchableOpacity onPress={()=>Actions.veg()}>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv1OXQ.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:35*s,fontWeight:'bold'}}>蔬菜</Text>
                        </View>
                        <View style={styles.sort_s2}>
                            <TouchableOpacity onPress={()=>Actions.tree()}>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3PpT.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:35*s,fontWeight:'bold'}}>种苗</Text>
                        </View>
                        <View style={styles.sort_s2}>
                            <TouchableOpacity onPress={()=>Actions.cow()}>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3VB9.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:25*s,fontWeight:'bold'}}>禽畜牡蛋</Text>
                        </View>
                        <View style={styles.sort_s2}>
                            <TouchableOpacity onPress={()=>Actions.fish()}>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3Q1O.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:37*s,fontWeight:'bold'}}>水产</Text>
                        </View>
                    </View>
                    <View style={styles.sort_s3}>
                        <View style={styles.sort_s4}>
                            <TouchableOpacity>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3JHA.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:30*s,fontWeight:'bold'}}>中药材</Text>
                        </View>
                        <View style={styles.sort_s4}>
                            <TouchableOpacity>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv30gS.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:35*s,fontWeight:'bold',marginTop:3*s}}>粮油</Text>
                        </View>
                        <View style={styles.sort_s4}>
                            <TouchableOpacity>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3sBj.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:26*s,fontWeight:'bold',marginTop:3*s}}>农副产品</Text>
                        </View>
                        <View style={styles.sort_s4}>
                            <TouchableOpacity>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3Tb9.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:23*s,fontWeight:'bold',marginTop:3*s}}>绿化苗木</Text>
                        </View>
                        <View style={styles.sort_s4}>
                            <TouchableOpacity>
                                <Image source={{uri:'https://s1.ax1x.com/2020/05/23/Yv3q4x.png'}} style={styles.sort_s5}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,marginLeft:25*s,fontWeight:'bold',marginTop:2*s}}>农业设备</Text>
                        </View>
                    </View>
                
                </View>
                <View style={{height:1100*s,backgroundColor:'#FFFAF0'}}>
                    <FlatList
                        data={content}
                        numColumns={2}
                        renderItem={
                            ({item})=>(
                                <TouchableOpacity onPress={()=>Actions.detail()}>
                                    <View style={{width:'43%',height:350*s,marginLeft:27*s,marginTop:10*s}}>
                                        <Image source={item.img} resizeMode='stretch' style={{height:350*s,width:280*s,borderRadius:20*s}}/>
                                    </View>
                                </TouchableOpacity>    
                            )
                        }
                    />
                </View>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    // 顶部搜索
    header_search:{
        height:100*s,
        backgroundColor:'#FFFAF0'
    },
    header_s1:{
        width:'80%',
        height:'60%',
        fontSize:15,
        borderRadius:40*s,
        borderWidth:2.5*s,
        borderColor:'rgb(76,196,149)',
        top:20*s,
        left:20*s,
        backgroundColor:'white'
    },
    header_s2:{
        width:'15%',
        height:42*s,
        left:400*s,
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
    header_s4:{
        left:535*s,
        top:-135*s
    },

    // 轮播
    wrapper:{
        width:'100%',
        height:300*s,
        backgroundColor:'black'
    },

    //分类
    sort_s1:{
        height:100*s,
        width:'100%',
        position:'absolute',
        top:420*s,
        flexDirection:'row',
        backgroundColor:'#FFFAF0'
    },
    sort_s2:{
        height:98*s,
        width:'17%',
        backgroundColor:'white',
        marginLeft:15*s,
        marginTop:4*s,
        backgroundColor:'#FFFAF0'
    },
    sort_s3:{
        height:200*s,
        width:'100%',
        position:'absolute',
        top:520*s,
        flexDirection:'row',
        backgroundColor:'#FFFAF0'
    },
    sort_s4:{
        height:98*s,
        width:'17%',
        backgroundColor:'white',
        marginLeft:15*s,
        marginTop:3*s,
        backgroundColor:'#FFFAF0'
    },
    sort_s5:{
        height:70*s,
        width:70*s,
        marginLeft:18*s
    },
    sort_s6:{
        fontSize:16*s,
        marginLeft:30*s,
        fontWeight:'bold'
    },

    //推荐商品
    command_s1:{
        width:'100%',
        height:500*s,
        backgroundColor:'black',
        position:'absolute',
        top:600*s
    }
});