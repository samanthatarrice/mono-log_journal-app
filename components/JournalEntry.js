import React from 'react';
import { ScrollView, View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const JournalEntry = () => {
  
  let date = new Date().toDateString();

  const [text, onChangeText] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Text>{date}</Text>
      <View style={styles.text}>
        <Icon name='location-outline' type='ionicon' />
        <Text>Location</Text>
      </View>
      <View style={styles.text}>
        <Icon style={{marginLeft:2.5, marginRight:5}} name='pencil' type='font-awesome' />
        <Text>Title</Text>
      </View>
      <View style={{marginTop: 10}}>
        <TextInput 
          style={styles.textarea}
          onChangeText={onChangeText} 
          value={text} 
          multiline
          numberOfLines={10}
          allowFontScaling
          autoCapitalize='sentences'
          textAlignVertical= 'top'
          placeholder='Add your journal entry here!'
        /> 
      </View>
      <Button
        title="Image"
        icon={{
          name: 'add-circle',
          type: 'ionicons',
          size: 30,
          color: 'white',
        }}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          // marginHorizontal: 50,
          height: 80,
          width: '100%',
          marginTop: 10
        }}
        onPress={() => Alert.alert('Choose image')}
      />
      <Button
        title="Log Entry"
        icon={{
          name: 'check',
          type: 'ionicons',
          size: 30,
          color: 'white',
        }}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          marginTop: -10,
          height: 80,
          width: '100%',
        }}
        onPress={() => Alert.alert('Are you really done?')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  text: {
    marginTop: 10, 
    marginRight:'auto', 
    display:'flex', 
    flexDirection:'row'
  },
  textarea: {
    backgroundColor: '#FFF',
    padding: 10,
    alignItems: 'flex-start'
  }
});

export default JournalEntry;