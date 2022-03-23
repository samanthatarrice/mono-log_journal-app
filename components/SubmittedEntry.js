import React from 'react';
import { View, ScrollView, Text, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const SubmittedEntry = (props) => {

  const {allEntries} = props.route.params;
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
                console.log('Delete this entry:' + JSON.stringify(entry));
                allEntries.splice(entry.id, 1) 
                //not working...
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
    backgroundColor:'#C1F8CF'
  }
})

export default SubmittedEntry;
