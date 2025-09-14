import React, { useLayoutEffect } from 'react'
import  { useState } from 'react';
import { StyleSheet, Text, View,Pressable, Image,TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';


const LQ = () => {
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
      require('../assets/L.mp3')
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
        <Text style={styles.heading1}>Question  1</Text>
      </View>
      <View style={styles.sub}><Text style={styles.sub2}> Listen  to  the  audio  and</Text>
      <Text style={styles.sub2}>select  which  letter  it  is</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.letter2}>
      
        <TouchableOpacity onPress={playSound}>
      <View style={styles.letterVoice}>
        <Text style={styles.button}>   Press   to   play     </Text>
        <Text style={styles.button}>audio</Text>
        </View>
        </TouchableOpacity>
      
      </View>
      </View>

      <View style={styles.gap}>
      
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lqw')
        }}>
      <View style={styles.op}>
        <Text style={styles.opt}>s</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lqw')
        }}>
      <View style={styles.op}>
        <Text style={styles.opt}>u</Text>
     </View>
     </TouchableOpacity><TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lqr')
        }}>
      <View style={styles.op}>
        <Text style={styles.opt}>l</Text>
     </View>
     </TouchableOpacity><TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lqw')
        }}>
      <View style={styles.op}>
        <Text style={styles.opt}>c</Text>
     </View>
     </TouchableOpacity>
     </View>
      
      <View style={styles.navigate}>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Vq')
        }}>
      <View>
       <Text style={styles.next}>Next</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lessons1')
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
  
  
  letterVoice:{
    height: 120,
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
    bottom: 60,
  }, 
  sub2:{
    fontSize: 30,
  },
  gap:{
    gap:15,
  },
  op:{
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    width: 280,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  opt:{
    fontWeight: 'bold',
    fontSize: 30,
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

export default LQ