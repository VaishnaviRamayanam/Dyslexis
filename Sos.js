
import React, { useLayoutEffect,useState,ScrollView } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import call from 'react-native-phone-call'

const Sos = () => {
  const navigation=useNavigation();

  useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown: false,
      });
  }, []);
const Call1 =()=>{
  const args = {
    number: '100', 
    prompt: false,
    skipCanOpen: true ,
  };
  call(args).catch(console.error)
};
const Call2 =()=>{
    const args = {
      number: '101', 
      prompt: false,
      skipCanOpen: true ,
    };
    call(args).catch(console.error)
  };
  const Call3 =()=>{
    const args = {
      number: '102', 
      prompt: false,
      skipCanOpen: true ,
    };
    call(args).catch(console.error)
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.p}>

        <TouchableOpacity
          onPress={Call1}
          style={styles.b}>
          <Text style={styles.bt}>
            Call  the  police
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Call2}
          style={styles.b}>
          <Text style={styles.bt}>
            Call  the  fire  brigade
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Call1}
          style={styles.b}>
          <Text style={styles.bt}>
              Call  for   ambulance
          </Text>
        </TouchableOpacity></View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  p:{
    paddingVertical:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4EAD5',
    alignItems: 'center',
    justifyContent: 'center',
    gap:50,
  },
  b: {
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    width: '90%',
    height: 140,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  bt:{
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 1.5,
  },
});

export default Sos;