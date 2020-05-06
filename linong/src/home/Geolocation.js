import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import geolocation from "@react-native-community/geolocation"

const { width, scale } = Dimensions.get('window');
/** 450   2 */
const s = width / 640;

export default class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: '',//经度
            latitude: '',//纬度
            city: ''
        }
    }
    componentDidMount() {
        geolocation.getCurrentPosition(
            location => {
                this.setState({
                    longitude: location.coords.longitude, 
                    latitude: location.coords.latitude
                })
                console.log(location.coords);
                fetch('http://api.avatardata.cn/CoordAddress/Lookup?key=1341ebcfa4fd4ebf99413a4393e37319&lat='+this.state.latitude+'&lon='+this.state.longitude)
                    .then(res => res.json())
                    .then(res => {
                        console.log('---------------------------------------')
                        console.log(res)
                        this.setState({
                            city: res.result.city 
                        })
                        
                    });
            },
            error => {
                console.log(error);
            }
        )
        console.log(777)
    }
    render() {
        return (
            <View style={{width:'10%',height:60*s,marginLeft:20}}>
                <Text style={{lineHeight:60*s}}>{this.state.city}</Text>
            </View>
        )
    }
}