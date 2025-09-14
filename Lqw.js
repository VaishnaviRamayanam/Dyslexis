import React, { useLayoutEffect } from 'react'
import  { useState } from 'react';
import { StyleSheet, Text, View,Pressable, Image,TouchableOpacity,ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';


const Lqw = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    


  return (
    <View style={styles.page}>
      <ScrollView>
      <View style={styles.p}>

      <View style={styles.heading}>
        <Text style={styles.heading1}>Question  1</Text>
      </View>
      <View style={styles.sub}>
        <Text style={styles.sub2}> Oh no!</Text>
        <Text style={styles.sub2}> You  chose  the  wrong</Text>
        <Text style={styles.sub2}> answer</Text>
      <Text style={styles.sub2}>The  correct  answer  is </Text>
      <Text style={styles.sub2}>l</Text>
      </View>
      

      <View style={styles.gap}>
        
      <View style={styles.opw}>
        <Text style={styles.opt}>s</Text>
     </View>
     <View style={styles.opw}>
        <Text style={styles.opt}>u</Text>
     </View>
     <View style={styles.opr}>
        <Text style={styles.opt}>l</Text>
     </View>
     <View style={styles.opw}>
        <Text style={styles.opt}>c</Text>
     </View>
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
 
  sub:{
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  sub2:{
    fontSize: 35,
    fontWeight:'800',
  },
  gap:{
    gap:15,
  },
  opw:{
    backgroundColor:"red",
    justifyContent: 'space-between',
    width: 280,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  opr:{
    backgroundColor:"green",
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

export default Lqw