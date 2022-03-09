import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const JournalEntry = () => {
  
  let date = new Date().toDateString();

  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <View style={{marginTop: 10, marginRight:'auto', display:'flex', flexDirection:'row'}}>
        <Icon name='location-outline' type='ionicon' />
        <Text>Location</Text>
      </View>
      <View style={{marginTop: 10, marginRight:'auto', display:'flex', flexDirection:'row'}}>
        <Icon name='pencil' type='ionicon' />
        <Text>Title</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
});

export default JournalEntry;