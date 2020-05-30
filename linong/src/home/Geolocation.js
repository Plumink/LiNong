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
                console.log('success');
                console.log(location.coords.latitude);
                console.log(location.coords.longitude);    
                fetch('http://api.map.baidu.com/reverse_geocoding/v3/?ak=C11a1glnS4HZ9tGQQHbTV3klRc9Gx8Hr&output=json&coordtype=wgs84ll&location='+location.coords.latitude+','+location.coords.longitude)
                    .then((res)=>res.json())
                    .then((res)=>{
                        console.log(res)
                    })
            },
            error => {
                console.log('error');
                console.log(error);
            }
        )      
    }
    render() {
        return (
            <View style={{width:'10%',height:60*s,marginLeft:10,marginRight:-30}}>
                {/* <Text style={{lineHeight:60*s}}>{this.state.city}</Text> */}
                <Text style={{lineHeight:60*s}}>张家口</Text>
            </View>
        )
    }
}