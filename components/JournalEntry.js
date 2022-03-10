import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { Icon, Button, ButtonGroup } from 'react-native-elements';
import { Modal } from 'react-native';

const JournalEntry = () => {
  
  let date = new Date().toDateString();

  const [journalText, setJournalText] = useState('');
  console.log(journalText)

  const [imageModal, setImageModal] = useState(false);
  const [imageType, setImageType] = useState(null);

  const [previewModal, setPreviewModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text>{date}</Text>
      <View style={styles.text}>
        <Icon name='location-outline' type='ionicon' />
        <Text>Location</Text>
      </View>
      <View style={styles.text}>
        <Icon 
          style={{marginLeft:2.5, marginRight:5}} 
          name='pencil' 
          type='font-awesome' />
        <Text>Title</Text>
      </View>
      <View style={{margin:10}}>
        <TextInput 
          style={styles.textarea}
          onChangeText={journalText => setJournalText(journalText)} 
          defaultValue={journalText}
          // name='journalText'
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
          height: 80,
          width: '100%',
          marginTop: 10
        }}
        onPress={() => setImageModal(true)}
      />
      <Modal
        transparent={true}
        animationType='fade'
        visible={imageModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setImageModal(!imageModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf:'flex-end'}}>
              <Icon
                style={{margin:-5, padding:-10}}
                name='close'
                type='ionicons'
                size={30}
              />
            </View>
            <ButtonGroup
              buttons={[
                <Icon
                  name='camera'
                  type='feather'
                  size={140}
                  color='white'
                />,
                <Icon
                  name='image'
                  type='feather'
                  size={140}
                  color='white'
                />
              ]}
              selectedIndex={imageType}
              onPress={(value) => {
                value === 0 ? console.log('val 0 selected') : console.log('val 0 not selected');
                setImageType(value);
              }}
              containerStyle={{
                height: 160,
              }}
              buttonStyle={{
                paddingVertical:10,
                backgroundColor:'lightgray',
                
              }}
              selectedButtonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
              }}
            />   
          </View>  
        </View>
      </Modal>
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
        onPress={() => setPreviewModal(true)}
      />
      <Modal
        animationType='fade'
        transparent={true}
        visible={previewModal}
        onRequestClose={() => {
          Alert.alert('Preview modal closed');
          setPreviewModal(!previewModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Your Journal Entry:</Text>
            <Text style={{marginTop:10}}>{journalText}</Text>
            <Button
              title='Submit'
              buttonStyle={{
                backgroundColor: 'rgb(28, 109, 208)',
                borderRadius: 5,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>
        </View>
      </Modal>
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
    marginHorizontal: -10,
    alignItems: 'flex-start',
    marginTop: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '92%',
    margin: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default JournalEntry;