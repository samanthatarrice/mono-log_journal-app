import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>   
    
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    padding:16,
    backgroundColor:'#C1F8CF',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})