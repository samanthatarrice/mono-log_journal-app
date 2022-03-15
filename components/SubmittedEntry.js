import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const SubmittedEntry = (props) => {
  
  const {journalData} = props.route.params;
  console.log(journalData)
  const submittedEntries = journalData.map(entry => 
    
    <Card style={{position:'absolute'}} key={entry.id}>
      <Icon style={{position:'relative',marginLeft:'auto'}} size={35} name={entry.mood} type='font-awesome-5' />
      <Card.Title style={{position:'relative',top:-30,marginBottom:-10}}>{entry.title}</Card.Title>
      <Text style={{textAlign:'center',fontSize:10,marginBottom:20}}>{entry.date}</Text>
      <Card.Divider />
      <Text>{entry.text}</Text>
    </Card>
    
  );

  return (
    <ScrollView>
      {submittedEntries}
    </ScrollView>
  );
}

export default SubmittedEntry;