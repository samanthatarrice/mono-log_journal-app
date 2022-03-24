import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const SubmittedEntry = (props) => {
  // console.log(`Props: ${props}`)

  // Finally got this to work! Before I was trying to check if allEntries.route.params was undefined, but since this variable is only initialzed when the event happens, it wasn't even reading that variable. Of course, it had to look at the props for it to evaluate this!
  if (props.route.params === undefined) {
    return (
      <View style={{backgroundColor:'#C1F8CF',display:'flex',alignItems:'center',height:'100%',justifyContent:'center',padding:25}}>
        <Text style={{textAlign:'center',marginBottom:20,fontFamily:fonts.SpaceItalic,fontSize:12}}>You haven't created any entries yet.</Text>
        <Text style={{fontFamily:fonts.SpaceMono,textAlign:'center'}}>To create an entry, go to the + New Entry tab.</Text>
      </View>
    )
  } 
  const {allEntries} = props.route.params;
  const [remainingEntries, setRemainingEntries] = useState();
  console.log( `Remaining Entries: ${JSON.stringify(remainingEntries)}`)
  useEffect(() => {
    setRemainingEntries(allEntries)
  }, [allEntries])

  const submittedEntries = allEntries.map(entry => 
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
                console.log(`Entry to delete: ${JSON.stringify(entry)}`)
                const afterDelete = allEntries.splice(entry.length, 1)
                setRemainingEntries(afterDelete);
                console.log(`Remaining Entries after delete: ${JSON.stringify(remainingEntries, null, 2)}`)
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
            <Text style={{textAlign:'center',fontSize:10,fontFamily:fonts.SpaceMono}}>{entry.date}</Text>
            <Icon size={35} name={entry.mood.name} color={entry.mood.color} type='font-awesome-5' />
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
