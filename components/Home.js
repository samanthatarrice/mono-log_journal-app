import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {

  console.log('home rendered')
  const [randomQuote, setRandomQuote] = useState([]);


  useEffect(() => {
    async function getRandomQuote() {
      try {
        const res = await fetch('https://zenquotes.io/api/random');
        const data = await res.json();
        setRandomQuote(data[0]);
      } catch (error) {
        setRandomQuote({...randomQuote,q:'Network Error', a:'Zen Quotes'})
        console.log('ERROR:', error)
      }
    }
  getRandomQuote()
  
  }, [])

  // useEffect(() => {

  //   fetch('https://zenquotes.io/api/random')
  //     .then(res => res.json())
  //     .then(data => setRandomQuote(data[0]))
  //     .catch(e => console.log('Error:', e))
  // }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/logo-gradient.png')}
        style={{width:250,height:250}}/>
      <Text style={{fontSize:20,color:'#3E4985',fontFamily:'BioRhyme_400Regular'}}>A Journaling App</Text>
      <View>
        <Text style={{marginHorizontal:20,fontSize:14,color:'#3E4985',textAlign:'center',fontFamily:'SpaceMono_400Regular_Italic'}}>"{randomQuote.q}"</Text>
        <Text style={{textAlign:'center',marginTop:15,paddingRight:10,fontFamily:'BioRhyme_400Regular',color:'#3E4985',fontSize:10}}>- {randomQuote.a}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:16,
    backgroundColor:'#C1F8CF',
    height:'100%',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center'
  }
})

export default Home;