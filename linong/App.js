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
//---tuopin
import ZhengceXQ from './src/tuopin/ZhengceXQ';
import JingyanXQ1 from './src/tuopin/JingyanXQ1';
import KejiXQ from './src/tuopin/KejiXQ';
import Pinglun from './src/tuopin/Pinglun';
import Xinwen from './src/tuopin/Xinwen';
import Xinwen1 from './src/tuopin/Xinwen1';
import Xinwen2 from './src/tuopin/Xinwen2';
import Xinwen3 from './src/tuopin/Xinwen3';
import Xinwen4 from './src/tuopin/Xinwen4';
import KejiXQ1 from './src/tuopin/KejiXQ1';
import KejiXQ2 from './src/tuopin/KejiXQ2';
//---shangcheng
import GoodsFruit from './src/goods/GoodsFruit';
import GoodsSearch from './src/goods/GoodsSearch';
import GoodsVeg from './src/goods/GoodsVeg';
import GoodsTree from './src/goods/GoodsTree';
import GoodsCow from './src/goods/GoodsCow';
import GoodsFish from './src/goods/GoodsFish';
import GoodsDetail1 from './src/goods/GoodsDetail1';
//---wode 
import Sale from './src/user/Sale';
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
                        <Scene key='pl' hideNavBar={true} component={Pinglun}/>
                        <Scene key='xw' hideNavBar={true} component={Xinwen}/>
                        <Scene key='xw1' hideNavBar={true} component={Xinwen1}/>
                        <Scene key='xw2' hideNavBar={true} component={Xinwen2}/>
                        <Scene key='xw3' hideNavBar={true} component={Xinwen3}/>
                        <Scene key='xw4' hideNavBar={true} component={Xinwen4}/>
                        <Scene key='kj1' hideNavBar={true} component={KejiXQ1}/>
                        <Scene key='kj2' hideNavBar={true} component={KejiXQ2}/>
                        {/* <Scene key='jy' hideNavBar={true} component={JingyanXQ}/> */}
                    </Scene>
                    <Scene 
                        key='S'
                        title='商城'
                        hideNavBar
                        icon={({ focused }) => <Icon1 size={25} color={focused ? 'rgb(242,48,48)' : 'rgb(151,151,151)'} name='shopping-cart' />}
                    >
                        <Scene key='shop' hideNavBar={true} component={Goods}/>
                        <Scene key='fruit' hideNavBar={true} component={GoodsFruit}/>
                        <Scene key='veg' hideNavBar={true} component={GoodsVeg}/>
                        <Scene key='tree' hideNavBar={true} component={GoodsTree}/>
                        <Scene key='cow' hideNavBar={true} component={GoodsCow}/>
                        <Scene key='fish' hideNavBar={true} component={GoodsFish}/>
                        <Scene key='search' hideNavBar={true} component={GoodsSearch}/>
                        <Scene key='detail' hideNavBar={true} component={GoodsDetail1}/>
                    </Scene>
                    <Scene 
                        key='M'
                        title='我的'
                        hideNavBar
                        icon={({ focused }) => <Icon size={25} color={focused ? 'rgb(242,48,48)' : 'rgb(151,151,151)'} name='user' />}
                    >
                        <Scene key='U' hideNavBar={true} component={User}/>
                        <Scene key='one' hideNavBar={true} component={Sale}/>
                    </Scene>
                </Tabs>
            </Overlay> 
        </Router> 
    );
};

export default App;





