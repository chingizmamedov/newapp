import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'


import Backgroun from '../../assets/bg.jpg';

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  navigationOptions = {
    header: {
      visible: false,
    }
  }
  render(){
    return (
      <ImageBackground source={Backgroun} style={styles.background}>
        {/* <Text style={styles.text}>HomeScreen chingiz</Text> */}
        <StatusBar  barStyle="light-content" />
        <TouchableOpacity style={{
          width: 204,
          height: 56,
          backgroundColor: '#E53935',
          borderRadius: 200,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => {
          this.props.navigation.navigate('Home')
        }}>
          <Text style={{
            color: 'white',
            textTransform: 'uppercase'
          }}>Регистрация</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          color: 'white',
          textTransform: 'uppercase',
          marginTop: 24,
          width: 40,
          height: 20
        }}
        onPress={() => { 
          this.props.navigation.navigate('Login')
        }}>
        <Text style={{
            color: 'white',
            textTransform: 'uppercase'
          }}>Вход</Text>
          
        </TouchableOpacity>
      </ImageBackground>
    )
  }
  
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 44
  }
})

export default Index
