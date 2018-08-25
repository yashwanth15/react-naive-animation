import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'

export default class LoginScreen extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={require('../assets/login_bg.jpg')} style={{flex:1}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Animatable.View
              animation="zoomIn" iterationCount={1}
              style={{backgroundColor:"white",height:100,width:100,alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:26,color:'black'}}>UBER</Text>
            </Animatable.View>
          </View>
          <Animatable.View animation="slideInUp" iterationCount={1}>
            <View style={{height:150,backgroundColor:'white'}}>
              <View style={{opacity:1,alignItems:'flex-start',paddingHorizontal:25,marginTop:25}}>
                <Text style={{fontSize:24,color:'black'}}>Get moving with Uber</Text>
              </View>
              <TouchableOpacity>
                <View style={{marginTop:25,paddingHorizontal:25,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/india.png')} style={{height:24,width:24,resizeMode:"contain"}}/>
                <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                  <Text style={{fontSize:20,paddingHorizontal:10,color:'black'}}>+91</Text>
                  <TextInput style={{flex:1,fontSize:20}} placeholder="Enter your mobile number" underlineColorAndroid="transparent"/>
                </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{height:70,backgroundColor:'white',justifyContent:'center',alignItems:'flex-start',borderTopColor:'#e8e8ec',borderWidth:1,paddingHorizontal:25}}>
              <Text style={{color:'#5a7fdf',fontWeight:'bold'}}>Or connect using a social account</Text>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
