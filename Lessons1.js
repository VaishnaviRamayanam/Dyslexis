import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Lessons1 = () => {
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
            navigation.navigate('A')
        }}>
     <View style={styles.Basic}>
        <Text style={styles.BasicText}>A - E</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('F')
        }}>
     <View style={styles.Custom}>
     <Text style={styles.BasicText}>F - J</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('K')
        }}>
     <View style={styles.Story}>
     <Text style={styles.BasicText}>K - O</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('P')
        }}>
     <View style={styles.Upload}> 
     <Text style={styles.BasicText}>P - T</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('U')
        }}>
     <View style={styles.smtg}> 
     <Text style={styles.BasicText}>U - Z</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Q1')
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
  
});

export default Lessons1;