import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/logo-gradient.png')}
        style={{width:250,height:250}}/>
      <Text style={{marginTop:20,fontSize:20,color:'#3E4985',fontFamily:'BioRhyme_400Regular'}}>A Journaling App</Text>
      <Text style={{marginTop:50,marginHorizontal:20,fontSize:14,color:'#3E4985',textAlign:'center',fontFamily:'SpaceMono_400Regular_Italic'}}>"Random motivational quote from API here..."</Text>
    </View>
  );
}

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

export default Home;