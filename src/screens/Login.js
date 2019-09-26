import React from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native'



const width = Dimensions.get('window').width


class Login extends React.Component {
  render() {
    return (
      <View style={style.background}>
        <StatusBar barStyle="light-content" />
        <TextInput style={style.input}
          placeholder="Логин*"
         />
        <TextInput style={style.input}
         secureTextEntry={true}
        placeholder="Пароль*"
        />
        <TouchableOpacity style={{
          marginTop: 20
        }}>
          <Text style={{
            color: 'white'
          }}>Забыли пароль?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: width - 32,
          height: 56,
          backgroundColor: '#E53935',
          borderRadius: 200,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 32
        }}
        onPress={() => {
          this.props.navigation.navigate('Home')
        }}>
          <Text style={{
            color: 'white',
            textTransform: 'uppercase'
          }}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginTop: 20,
          alignSelf: 'center'
        }}>
          <Text style={{
            color: 'white',
            textTransform: 'uppercase',
            fontSize: 14
          }}>Отмена</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: width - 32,
          height: 56,
          backgroundColor: '#4A76A8',
          borderRadius: 200,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 32
        }}
        onPress={() => {
          this.props.navigation.navigate('Home')
        }}>
          <Text style={{
            color: 'white',
            textTransform: 'uppercase'
          }}>Вход через VK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginTop: 20,
          alignSelf: 'center'
        }}>
          <Text style={{
            color: 'white',
            textTransform: 'uppercase',
            fontSize: 14
          }}>Войти через соцсети</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1E1E22',
    paddingHorizontal: 16
  },
  input: {
    height: 56,
    width: width - 32,
    marginTop: 24,
    paddingHorizontal: 12,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #1E1E22'
  }
})

export default Login
