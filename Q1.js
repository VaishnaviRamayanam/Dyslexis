import React, { useLayoutEffect } from 'react'
import  { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';


const Q1 = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    


  return (
    <View style={styles.page}><ScrollView>
    <View style={styles.p}>

        
      <View style={styles.message}><Text style={styles.messaget}>Lets   see   how</Text></View>
      <View style={styles.message}><Text style={styles.messaget}>much   we</Text></View>
      <View style={styles.message}><Text style={styles.messaget}>learnt! :D</Text></View>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Cq')
        }}>
      <View style={styles.b}><View style={styles.button}><Text style={styles.buttont}>Start   quiz</Text></View></View>
      </TouchableOpacity>
      <View style={styles.navigate}>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Lessons2')
        }}>
      <View>
       <Text style={styles.back}>Back</Text>
      </View>
      </TouchableOpacity>
      </View></View>
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
  message:{
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  messaget:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:50,
  },
  button:{
    backgroundColor:"#FDF7C3",
    width: 380,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttont:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:50,
  },
  b:{
    paddingTop:50,
  },
  back:{
    fontSize: 20,
    right: 140,
    backgroundColor: "#E1EEDD",
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 2,
    borderColor: "black",
    top:140,
  },
});

export default Q1