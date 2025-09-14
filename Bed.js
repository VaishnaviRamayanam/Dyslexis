import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Bed = () => {
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
            navigation.navigate('Story1')
        }}>
     <View style={styles.Basic}>
     <Text style={styles.BasicText}>Tired  Tod</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Story2')
        }}>
     <View style={styles.Custom}>
     <Text style={styles.CustomText}>Heroic  Hawk</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Story3')
        }}>
     <View style={styles.Story}>
     <Text style={styles.StoryText}>The funny little falcon</Text>
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
    height: 200,
    borderRadius: 10,
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
    height: 200,
    borderRadius: 10,
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
    height: 200,
    borderRadius: 10,
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
  CustomText:{
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
  StoryText:{
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
  
});

export default Bed;