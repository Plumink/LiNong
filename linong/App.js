import React,{useEffect} from 'react';
import { View, Text} from 'react-native';
import { Router, Overlay, Scene, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';

import Home from './src/home/Home';
import Tuopin from './src/tuopin/Tuopin';
import Goods from './src/goods/Goods';
import User from './src/user/User';
import NongList from './src/home/NongList';
import Nongdetail from './src/home/NongDetail';
import News from './src/tuopin/News';
import MuList from './src/home/MuList';
import Help from './src/home/Help';
import MuDetails from './src/home/MuDetails';
import HelpDetails from './src/home/HelpDetails';
import Zhengce from './src/tuopin/Zhengce';
import Jingyan from './src/tuopin/Jingyan';
import Fupin from './src/tuopin/Fupin';
import JingyanXQ from './src/tuopin/JingyanXQ';
import Fabu from './src/tuopin/Fabu';
import ZhengceXQ from './src/tuopin/ZhengceXQ';
import JingyanXQ1 from './src/tuopin/JingyanXQ1';
import KejiXQ from './src/tuopin/KejiXQ';
console.disableYellowBox = true;
const App = () => {
    return (
        // <Text>798</Text>
        <Router>
            <Overlay>
                <Tabs
                    key='tabbar'
                    activeTintColor="rgb(242,48,48)"
                    inactiveTintColor="rgb(102,102,102)"
                    tabBarStyle={{ backgroundColor: 'white' }}
                >
                    <Scene 
                        key='H'
                        title='首页'
                        hideNavBar
                        icon={({ focused }) => <Icon size={25} color={focused ? 'rgb(242,48,48)' : 'rgb(151,151,151)'} name='home' />}
                    >
                        <Scene key='home'  hideNavBar={true} component={Home}/>
                        <Scene key="nonglist" hideTabBar={true} hideNavBar={true} component={NongList} />
                        <Scene key='nongdetail' hideTabBar={true} hideNavBar={true} component={Nongdetail}/>
                        <Scene key="mulist" hideTabBar={true} hideNavBar={true} component={MuList} />
                        <Scene key="mudetails" hideTabBar={true} hideNavBar={true} component={MuDetails} />
                        <Scene key="helpone" hideTabBar={true} hideNavBar={true} component={Help} />
                        <Scene key="helpDetails" hideTabBar={true} hideNavBar={true} component={HelpDetails} />

                    </Scene>
                    <Scene 
                        key='G'
                        title='脱贫'
                        hideNavBar
                        icon={({ focused }) => <Icon size={25} color={focused ? 'rgb(242,48,48)' : 'rgb(151,151,151)'} name='appstore-o' />}
                    >
                        <Scene key='help' hideNavBar={true} component={Tuopin}/>
                        <Scene key='two' hideNavBar={true}  component={News}/>
                        <Scene key='three' hideNavBar={true} component={Zhengce}/>
                        <Scene key='four' hideNavBar={true} component={Jingyan}/>
                        <Scene key='five' hideNavBar={true} component={Fupin}/>
                        <Scene key='jy' hideNavBar={true} component={JingyanXQ}/>
                        <Scene key='jy1' hideNavBar={true} component={JingyanXQ1}/>
                        <Scene key='fb' hideNavBar={true} component={Fabu}/>
                        <Scene key='zc' hideNavBar={true} component={ZhengceXQ}/>
                        <Scene key='kj' hideNavBar={true} component={KejiXQ}/>
                    </Scene>
                    <Scene 
                        key='S'
                        title='商城'
                        hideNavBar
                        icon={({ focused }) => <Icon1 size={25} color={focused ? 'rgb(242,48,48)' : 'rgb(151,151,151)'} name='shopping-cart' />}
                    >
                        <Scene key='shop' hideNavBar={true} component={Goods}/>
                    </Scene>
                    <Scene 
                        key='mine'
                        title='我的'
                        hideNavBar
                        icon={({ focused }) => <Icon size={25} color={focused ? 'rgb(242,48,48)' : 'rgb(151,151,151)'} name='user' />}
                        component={User} 
                    >
                    </Scene>
                </Tabs>
            </Overlay> 
        </Router> 
    );
};

export default App;





// import React,{Component} from 'react';
// import { View, Text, Dimensions,StyleSheet } from 'react-native';


// const {width, scale} = Dimensions.get('window');
// /** 450   2 */
// const s = width / 640;

// const App = () => {
//     return (
//         <View style={{backgroundColor:'white',flex:1}}>
//             {/* 状态栏 */}
            
//             <View style={styles.header}>
//                 <Text>搜索、定位</Text>
//             </View>
//             <View>
//               <Text style={styles.weather}>天气</Text>
//             </View>
//             <View style={styles.content}>
//               <View style={styles.nongye}>
//                 <Text>农业</Text>
//               </View>
//               <View style={styles.contentR}>
//                 <View style={styles.muye}>
//                   <Text>牧业</Text>
//                 </View>
//                 <View style={styles.bangshou}>
//                   <Text>找帮手</Text>
//                 </View>
//               </View>
//             </View>
//             <View style={styles.hangqing}>
//               <Text>轮播图、行情</Text>
//             </View>
//         </View>
//     )
// }
// export default App;
// const styles = StyleSheet.create({
//     header:{
//         height: 70*s,
//         borderWidth:1,
//         borderColor:'#e8e8e8',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     weather:{
//       width:'95%',
//       height:80*s,
//       backgroundColor:'blue',
//       margin:20*s,
//       borderRadius:20*s
//     },
//     content:{
//       width:'100%',
//       height:400*s,
//       borderWidth:1,
//       borderColor:'red',
//       alignItems:'center',
//       flexDirection:'row',
//       marginBottom:20*s
//     },
//     contentR:{
//       width:'100%',
//       flexDirection:'column',
//     },
//     nongye:{
//       width:'50%',
//       height:400*s,
//       borderWidth:1,
//       borderColor:'black',
//       justifyContent:'center'
//     },
//     muye:{
//       width:'50%',
//       height:190*s,
//       borderWidth:1,
//       borderColor:'green',
//       justifyContent:'center',
//       marginBottom:20*s
//     },
//     bangshou:{
//       width:'50%',
//       height:190*s,
//       borderWidth:1,
//       borderColor:'orange',
//       justifyContent:'center'
//     },
//     hangqing:{
//       width:'100%',
//       height:180*s,
//       borderWidth:1,
//       borderColor:'blue',
//     }
    
// })