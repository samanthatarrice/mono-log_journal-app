import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';
// import * as SecureStore from "expo-secure-store";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SubmittedEntry = (props) => {
  // console.log(`Props: ${props}`)

  // Finally got this to work! Before I was trying to check if allEntries.route.params was undefined, but since this variable is only initialzed when the event happens, it wasn't even reading that variable. Of course, it had to look at the props for it to evaluate this!
  console.log('my journal rendered')

  if (props.route.params === undefined) {
    return (
      <View style={{backgroundColor:'#C1F8CF',display:'flex',alignItems:'center',height:'100%',justifyContent:'center',padding:25}}>
        <Text style={{textAlign:'center',marginBottom:20,fontFamily:fonts.SpaceItalic,fontSize:12}}>You haven't created any entries yet.</Text>
        <Text style={{fontFamily:fonts.SpaceMono,textAlign:'center'}}>To create an entry, go to the + New Entry tab.</Text>
      </View>
    )
  } 

  const {allEntries} = props.route.params
  const [savedEntries, setSavedEntries] = useState([allEntries])

  useEffect(() => {
    setSavedEntries(allEntries)
  },[allEntries])

  const submittedEntries = allEntries?.map(entry => 
    <View key={entry.id}>
      <Pressable 
        onLongPress={() => Alert.alert(
          'Delete',
          'Do you want to delete this entry?',
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: () => {
                console.log('ENTRY TO DELETE:', JSON.stringify(entry, null, 2))
                let remainingEntries = savedEntries.filter(item => item !== entry)
                console.log('REMAINING ENTRIES:', JSON.stringify(remainingEntries, null, 2))
                setSavedEntries(remainingEntries)
              }
            }
          ],
          {
            cancelable: true,
          }
        )
        }>
        <Card key={entry.id}>
          <Card.Title style={{fontWeight:'normal',fontFamily:fonts.BioRhyme,fontSize:18,marginBottom:10}}>{entry.title}</Card.Title>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5, paddingBottom:5}}>
            <Text style={{textAlign:'center',fontSize:10,fontFamily:fonts.SpaceMono}}>{entry?.date}</Text>
            <Icon size={35} name={entry?.mood?.name} color={entry?.mood?.color} type='font-awesome-5' />
          </View>
          <Card.Divider />
          <Text style={{fontFamily:fonts.SpaceItalic,fontSize:12,fontStyle:'normal',paddingHorizontal:5}}>{entry.text}</Text>
          {entry.images &&
            entry.images.map(image => 
              <Image
                key={image}
                source={{ uri: image }} style={{ 
                  width: 325, 
                  height: 243.75,
                  alignSelf:'center',
                  marginTop:10
                }}
                resizeMode='cover' 
              />
            )
          }
        </Card>
      </Pressable>
    </View>
  );
  return (
      <ScrollView style={styles.container}>
        {submittedEntries}
      </ScrollView>
    );
}

const fonts = {
  Anton: 'Anton_400Regular',
  BioRhyme: 'BioRhyme_400Regular',
  SpaceMono: 'SpaceMono_400Regular',
  SpaceItalic: 'SpaceMono_400Regular_Italic',
  BigShoulders: 'BigShouldersDisplay_700Bold'
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#C1F8CF',
  }
})

export default SubmittedEntry;

  //Attempt to persist data with SecureStore:
  // SecureStore.setItemAsync('savedEntries', JSON.stringify(allEntries))
  //   .catch(error => console.log('COULD NOT SAVE INFO:', error));

  // useEffect(() => {
  //   SecureStore.getItemAsync('savedEntries')
  //     .then(userData => {
  //       const userInfo = JSON.parse(userData);
  //       if (userInfo) {
  //         setSavedEntries(userInfo)
  //       }
  //     });
  // }, [allEntries])
  
  // console.log('SAVED ENTRIES:', savedEntries)

  //This also works with Asnyc, but the entries don't persist:
  // async function saveEntries(allEntries) {
  //   try {
  //     await SecureStore.setItemAsync('allEntries', JSON.stringify(allEntries));
  //   } catch(err) {
  //     console.log(err)
  //   }
    
  // }
  // saveEntries(allEntries)

  // useEffect(() => {
  //   async function getSavedEntries() {
  //     let result = await SecureStore.getItemAsync('allEntries');
  //     if (result) {
  //       console.log('YOUR SAVED ENTRIES:' + result);
  //     } else {
  //       console.log('NO RESULTS')
  //     }
  //   }
  //   getSavedEntries()
  // },[allEntries])

//Attempt to persist data with AsyncStorage:
// if (savedEntries) {
  //   //To check the input not empty
  //   AsyncStorage.setItem('any_key_here', JSON.stringify(savedEntries));
  //   //Resetting the TextInput
  //   alert('Data Saved');
  //   //alert to confirm
  // } else {
  //   alert('Please fill data');
  //   //alert for the empty InputText
  // }
  
  // const getSavedData = () => {
  //   //function to get the value from AsyncStorage
  //   AsyncStorage.getItem('any_key_here').then(
  //     (value) => {
  //       //AsyncStorage returns a promise so adding a callback to get the value
  //       return setSavedEntries(value)
  //     }
  //   );
  // };
  //getSavedData