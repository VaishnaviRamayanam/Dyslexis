import React, { useLayoutEffect } from 'react'
import  { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';


const E2 = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [sound, setSound] = useState();

  const playSound = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/E.mp3')
    );

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  };

  const playSound1 = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/ear.mp3')
    );

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  };
  const playSound2 = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/elf.mp3')
    );

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  };


  return (
    <View style={styles.page}>
      <ScrollView>
      <View style={styles.p}>
      <View style={styles.heading}>
        <Text style={styles.heading1}>Letters</Text>
        <Text style={styles.heading2}>a - e</Text>
      </View>
      <View style={styles.main}>
      <View style={styles.letter}>
      <View >
        <Text style={styles.letterText}>e</Text>
        </View>
        </View>
        <View style={styles.letter2}>
      
      <TouchableOpacity onPress={playSound}>
      <View style={styles.letterVoice}>
        <Text style={styles.button}> Press </Text>
        </View>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.sub}><Text style={styles.sub2}> Words  that  starts  with  'e' </Text>
      <Text style={styles.sub2}> are:</Text>
      </View>
      <View style={styles.word}>
      <View><Text style={styles.wordText}>ear</Text></View>
      <TouchableOpacity onPress={playSound1}>
      <View style={styles.wordVoice}> 
      <Text style={styles.button}> Press </Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.word}>
      <View><Text style={styles.wordText}>elf</Text></View>
      <TouchableOpacity onPress={playSound2}>
      <View style={styles.wordVoice}> 
      <Text style={styles.button}> Press </Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.navigate}>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lessons2')
        }}>
      <View>
       <Text style={styles.next}>Done</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('D2')
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
    paddingTop:90,
  },
  heading:{
    alignItems: 'center',
    justifyContent: 'center',
    bottom:80,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:40,
  },
  letter:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterText:{
    backgroundColor: "#EEEEEE",
    fontSize: 130,
    paddingRight:40,
    paddingLeft:40,
    borderWidth: 2,
    borderColor: "black",
    
  },
  letterVoice:{
    height: 60,
    width: '100%',
    backgroundColor: "#F9F5EB",
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  letter2:{
    bottom:30,
  },
  
  button:{
    fontSize: 40,
    
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
    paddingTop: 40,
  },
  wordText:{
    fontSize: 50,
    //color: "#2F58CD",
    textDecorationLine: 'underline',
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
    paddingTop: 20,
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

export default E2
