
import React, { useLayoutEffect,useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'


const Custom2 = () => {
    const [text, onChangeText] = React.useState('');
  const [textInputValue, setTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');
  const navigation=useNavigation();

  useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown: false,
      });
  }, []);
  const saveValueFunction = () => {
    
    if (textInputValue) {
      AsyncStorage.setItem('any_key_here', textInputValue);
      setTextInputValue('');
      alert('Data Saved');
    } 
  };

  const getValueFunction = () => {
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        setGetValue(value),
    );
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      

      <View style={styles.container}>
      

        <Text style={styles.titleText}>
          Enter Phone Number
        </Text>
        <TextInput
          placeholder="Enter Number"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Save Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Get Number
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue}
        </Text>
        <View style={styles.sub}><Text style={styles.sub2}>Practice:</Text></View>
        <View style={styles.p}>
        <TextInput
        style={styles.letterText}
        onChangeText={onChangeText}
        placeholder="enter word"
        value={text}
      />
      </View>
        <View style={styles.navigate}>
            
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Start')
        }}>
      <View>
       <Text style={styles.next}>Done</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Custom1')
        }}>
      <View>
       <Text style={styles.back}>Back</Text>
      </View>
      </TouchableOpacity>
      </View>
     
      </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  p:{
   
    alignItems: 'center',
    justifyContent: 'center',
  },
    sub:{
        bottom: 30,
      }, 
      sub2:{
        fontSize: 30,
      },
    p:{

    },
    letterText:{
        backgroundColor: "#EEEEEE",
        fontSize: 30,
        padding:50,
       width:340,
        borderWidth: 2,
        borderColor: "black",
        
      },
  container: {
    flex: 1,
    backgroundColor: '#F4EAD5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 40,
    textAlign: 'center',
    fontSize: 30,
    
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#FDF7C3',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
    height:60,
    borderWidth: 2,
    borderColor: "black",
  },
  buttonTextStyle: {
    padding: 5,
    textAlign: 'center',
    fontSize: 30,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
    fontSize:30,
  },
  navigate:{
    flexDirection:'row',
    paddingTop:30,
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

export default Custom2;