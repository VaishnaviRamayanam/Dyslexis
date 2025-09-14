import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Lessons2 = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <View style={styles.WelcomeScreen}>
      <ScrollView>
      <View style={styles.p}>

      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('A2')
        }}>
     <View style={styles.Basic}>
        <Text style={styles.BasicText}>a - e</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('F2')
        }}>
     <View style={styles.Custom}>
     <Text style={styles.BasicText}>f - j</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('K2')
        }}>
     <View style={styles.Story}>
     <Text style={styles.BasicText}>k - o</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('P2')
        }}>
     <View style={styles.Upload}> 
     <Text style={styles.BasicText}>p - t</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('U2')
        }}>
     <View style={styles.smtg}> 
     <Text style={styles.BasicText}>u - z</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('QQ1')
        }}>
     <View style={styles.t}> 
     <Text style={styles.tt}>Quiz</Text>
     </View>
     </TouchableOpacity>
     </View>
      </ScrollView>
    </View>
  );
} 

const styles = StyleSheet.create({
  p:{
    paddingVertical:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WelcomeScreen: {
    flex: 1,
    backgroundColor: '#F4EAD5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Basic: {
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    bottom:40,
    width: 280,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Custom: {
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    bottom:20,
    width: 280,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Story: {
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    bottom:0,
    width: 280,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Upload: {
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    bottom:-20,
    width: 280,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  smtg:{
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    bottom:-40,
    width: 280,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  BasicText:{
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
  t:{
    backgroundColor:"#FDF7C3",
    justifyContent: 'space-between',
    bottom:-60,
    width: 380,
    height: 180,
    //borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  tt:{
    fontWeight: 'bold',
    fontSize: 120,
    letterSpacing: 1.5,
  },
  
});

export default Lessons2;