import React, { useLayoutEffect } from 'react'
import  { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';



const Custom1 = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    

    const [recording, setRecording] = useState();
    const [sound, setSound] = useState();
  
    const startRecording = async () => {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        console.log('Starting recording..');
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync();
        setRecording(recording);
      } catch (err) {
        console.error('Failed to start recording', err);
      }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording saved to ', uri);
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
  };

  const playSound = async () => {
    try {
      if (sound === undefined) {
        console.log('Sound is undefined');
        return;
      }
      console.log('Playing sound..');
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

 



  return (
    
    <View style={styles.page}>
      <ScrollView>
      <View style={styles.p}>
      <View style={styles.heading}>
        <Text style={styles.heading1}>Customised</Text>
        <Text style={styles.heading2}>Words</Text>
      </View>
      
      <View style={styles.main}>
      <View style={styles.letter}>
      <View >
      <TextInput
        style={styles.letterText}
        onChangeText={onChangeText}
        placeholder="enter word"
        multiline
        numberOfLines={4}
        value={text}
      />
        </View>
        </View>
        <View style={styles.sub}><Text style={styles.sub2}></Text></View>
        <View style={styles.main1}>
      <View style={styles.letter1}>
      <View >
      <TextInput
        style={styles.letterText1}
        onChangeText={onChangeText2}
        placeholder="enter meaning"
        multiline
        numberOfLines={4}
        value={text2}
      />
        </View>
        </View>
        </View>
        <View style={styles.letter2}>
     
      </View>
      </View>
      <View style={styles.sub}><Text style={styles.sub2}>Practice:</Text>
      </View>
      <View style={styles.word}>
      <TouchableOpacity style={styles.button} onPress={recording ? stopRecording : startRecording}>
        <Text style={styles.buttonText}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={playSound} disabled={!sound}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      
      
      </View>
      
      
      <View style={styles.navigate}>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Custom2')
        }}>
      <View>
       <Text style={styles.next}>Next</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Start')
        }}>
      <View>
       <Text style={styles.back}>Back</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
  
  );
} 

const styles = StyleSheet.create({
  p:{
    paddingVertical:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page:{
    flex: 1,
    backgroundColor: '#F4EAD5',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  heading:{
    alignItems: 'center',
    justifyContent: 'center',
    bottom:80,
    paddingTop:30,
  },
  heading1:{
    fontSize: 50,
    letterSpacing: 3,
    fontWeight: 'bold',
    //color: "#2F58CD",
  },
  heading2:{
    fontSize: 40,
    letterSpacing: 3,
    fontWeight: 'bold',
    //color: "#2F58CD",
  },
  main:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main1:{
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  letter1:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterText1:{
    backgroundColor: "#EEEEEE",
    fontSize: 20,
    
    height:250,
    width:300,
    borderWidth: 2,
    borderColor: "black",
    
  },
  letterText:{
    backgroundColor: "#EEEEEE",
    fontSize: 30,
    
    paddingRight:40,
    paddingLeft:40,
    borderWidth: 2,
    borderColor: "black",
    
  },
  
  
  button: {
    backgroundColor: '#6A5ACD',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  sub:{
    bottom: 30,
  }, 
  sub2:{
    fontSize: 30,
  },
  word:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap:30,
    bottom:30,
   
   
  },
  
  wordVoice:{
    height: 57,
    width: 140,
    backgroundColor: "#F9F5EB",
    borderWidth: 2,
    borderColor: "black",
  },
  navigate:{
    flexDirection:'row',
    
  },
  next:{
    fontSize: 20,
   
    left: 170,
    backgroundColor: "#E1EEDD",
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 2,
    borderColor: "black",
  },
  back:{
    fontSize: 20,
   
    right: 170,
    backgroundColor: "#E1EEDD",
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Custom1