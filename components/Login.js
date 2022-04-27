import React from 'react';
import { NativeAppEventEmitter } from 'react-native';
import { View, Text, TextInput, Button, Alert } from 'react-native';


const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Signup or Signin:</Text>
      <View>
        <TextInput          
          placeholder="email"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          placeholder="password"
          secureTextEntry
        />
      </View>
      <Button title="Sign In" />
      <Button title="Sign Up" />
    </View>
  );
}

export default Login;