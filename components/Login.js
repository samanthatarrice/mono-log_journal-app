import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { useAuth } from "../providers/AuthProvider";
// import styles from "../stylesheet";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate('Home');
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the email/password in state.
  const onPressSignIn = async () => {
    console.log('Trying sign in with user: ' + email);
    try {
      await signIn(email, password);
    } catch (err) {
      const errMess = `Failed to sign in: ${err.message}`;
      console.error(errMess);
      Alert.alert(errMess);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the email/password in state and then signs in.
  const onPressSignUp = async () => {
    console.log('Trying signup with user: ' + email);
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (err) {
      const errMess = `Failed to sign up: ${err.message}`;
      console.error(errMess);
      Alert.alert(errMess);
    }
  };


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
          onChangeText={setEmail}
          value={email}
          placeholder={email}       
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
          onChangeText={text => setPassword(text)}
          value={password}     
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
        onPress={onPressSignIn}
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
        onPress={onPressSignUp}
      />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#C1F8CF',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

