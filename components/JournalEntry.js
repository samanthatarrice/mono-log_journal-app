import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Alert, Modal, TouchableOpacity, StyleSheet, } from 'react-native';
import { Icon, Button, ButtonGroup } from 'react-native-elements';

const JournalEntry = ({navigation}) => {
  
  let date = new Date().toDateString();

  const [journalData, setJournalData] = useState([]);
  const [newJournalTitle, setNewJournalTitle] = useState('');
  const [newJournalText, setNewJournalText] = useState('');

  const [imageModal, setImageModal] = useState(false);
  const [imageType, setImageType] = useState(null);

  const [moodModal, setMoodModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);

  const [moodIcon, setMoodIcon] = useState('grin')

  return (
    <ScrollView style={styles.container}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text>{date}</Text>
          <View style={styles.text}>
            <Icon name='location-outline' type='ionicon' />
            <Text>Location</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setMoodModal(true)}>
          <Icon 
            style={{padding:10,backgroundColor:'#4FD3C4',borderRadius:50}}
            size={35}
            name={moodIcon}
            color='#FFF'
            type='font-awesome-5' />
        </TouchableOpacity>
      </View>
      <Modal
        animationType='fade'
        visible={moodModal} 
        transparent={true}
        onRequestClose={() => setMoodModal(!moodModal)} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Choose your mood:</Text>
            <View style={styles.moodsContainer}>
              <TouchableOpacity onPress={() => setMoodIcon('sad-tear')}><Icon size={45} name='sad-tear' type='font-awesome-5' /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon('frown')}><Icon size={45} name='frown' type='font-awesome-5' /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon('meh')}><Icon size={45} name='meh' type='font-awesome-5' /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon('grin-beam')}><Icon size={45} name='grin-beam' type='font-awesome-5' /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon('grin-hearts')}><Icon size={45} name='grin-hearts' type='font-awesome-5' /></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.text}>
        <Icon 
          style={{marginLeft:2.5, marginRight:5}} 
          name='pencil' 
          type='font-awesome' />
        <Text style={{fontWeight:'bold'}}>Title:</Text>
        <TextInput
          style={styles.title}
          onChangeText={newJournalTitle => setNewJournalTitle(newJournalTitle)}
          defaultValue={newJournalTitle}
          value={newJournalTitle}
          autoCapitalize='words'
          placeholder='Your title here!'
        />
      </View>
      <View style={{margin:10}}>
        <TextInput 
          style={styles.textarea}
          onChangeText={newJournalText => setNewJournalText(newJournalText)} 
          defaultValue={newJournalText}
          value={newJournalText}
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
          color: '#FFF8F3',
        }}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{backgroundColor: '#4FD3C4',borderRadius:30}}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
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
          setImageModal(!imageModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf:'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setImageModal(!imageModal);
                  setImageType(null);
                }} >
                <Icon
                  style={{margin:-5, padding:-10}}
                  name='close'
                  type='ionicons'
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <ButtonGroup
              buttons={[
                <Icon
                  name='camera'
                  type='feather'
                  size={100}
                  color='white'
                />,
                <Icon
                  name='image'
                  type='feather'
                  size={100}
                  color='white'
                />
              ]}
              selectedIndex={imageType}
              onPress={(value) => {
                value === 0 ? console.log('val 0 selected') : console.log('val 0 not selected');
                setImageType(value);
              }}
              containerStyle={{
                height: 120,
                marginBottom: 25,
                width: 270
              }}
              buttonStyle={{
                backgroundColor:'lightgray',
                
              }}
              selectedButtonStyle={{
                backgroundColor: '#A3E4DB',
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
          color: '#FFF8F3',
        }}
        loading={false}
        loadingProps={{size:'small',color:'white'}}
        buttonStyle={{backgroundColor:'#4FD3C4',borderRadius:30}}
        titleStyle={{fontWeight:'bold',fontSize:20}}
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
          setPreviewModal(!previewModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf:'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setPreviewModal(!previewModal);
                }} >
                <Icon
                  style={{margin:-5, padding:-10}}
                  name='close'
                  type='ionicons'
                  size={30} />
              </TouchableOpacity>
            </View>
            <Text style={{fontWeight:'bold', fontSize:20}}>Your Journal Entry:</Text>
            <Text>{newJournalTitle}</Text>
            <Icon name={moodIcon} type='font-awesome-5' />
            <Text style={{marginTop:10}}>{newJournalText}</Text>
            <Button
              className='previewModalBtn'
              title='Submit'
              loading={false}
              loadingProps={{size:'small',color:'white'}}
              buttonStyle={{
                backgroundColor: '#A3E4DB',
                borderRadius: 5,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={ () => {
                setPreviewModal(!previewModal);
                journalData.push({
                  id: journalData.length,
                  date: date,
                  title: newJournalTitle,
                  mood: moodIcon,
                  text: newJournalText,
                  image: ''
                });
                setJournalData(journalData);
                console.log(journalData)
                setNewJournalText('');
                setNewJournalTitle('');
                setMoodIcon('grin');
                Alert.alert('Journal entry submitted'); 
                navigation.navigate('Submitted Entry', {journalData});
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
    padding: 16,
    backgroundColor: '#C1F8CF'
  },
  text: {
    marginTop: 10, 
    marginRight:'auto', 
    display:'flex', 
    flexDirection:'row',
    alignItems:'center'
  },
  title: {
    marginLeft:10,
    backgroundColor:'#FFF',
    width:'100%',
    height:40,
    paddingHorizontal:10
  },
  textarea: {
    backgroundColor: '#FFF',
    padding: 10,
    marginHorizontal: -10,
    alignItems: 'flex-start',
    marginTop: 5
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
  },
  moodsContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    paddingTop:20
  }
});

export default JournalEntry;