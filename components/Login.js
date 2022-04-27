import React from 'react';
import { StyleSheet, NativeAppEventEmitter } from 'react-native';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';


const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Signup or Signin:</Text>
      <View>
        <TextInput       
          style={{ 
            backgroundColor: '#FFF', 
            marginTop: 20,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            width: 250,
            textAlign: 'center'
          }}
          placeholder="email"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          style={{ 
            backgroundColor: '#FFF', 
            marginTop: 20,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            width: 250,
            textAlign: 'center'
          }}         
          placeholder="password"
          secureTextEntry
        />
      </View>
      <Button 
        title="Sign In" 
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight:'bold', fontSize:18 }}
        containerStyle={{
          height: 60,
          width: 150,
          marginTop: 20
        }}
      />
      <Button 
        title="Sign Up" 
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight:'bold', fontSize:18 }}
        containerStyle={{
          height: 60,
          width: 150,
          marginTop: 10
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:16,
    backgroundColor:'#C1F8CF',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center'
  }
})

export default Login;