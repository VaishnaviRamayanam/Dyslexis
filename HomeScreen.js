import { View, Text, ImageBackground, Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    
    <ImageBackground className="flex-1" source={require("../assets/final.jpeg")} >
        
      
        <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Start')
        }}>
        <View  className="items-center ">
            <View style={styles.startButton}>
                <Text style={styles.startButtonText}>START</Text>
            </View>
        </View>
        </TouchableOpacity>
        
 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  p:{
    paddingVertical:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
    startButton:{
      backgroundColor:"#E1EEDD",
      width: '70%',
      height: '47%',
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "black",
      alignItems: 'center',
      justifyContent: 'center',
      top: '340%',

    },
    startButtonText:{
      fontSize: 40,
      letterSpacing: 3,
      fontWeight: 'bold',
    },
   
  });

export default HomeScreen