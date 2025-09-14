
import React, { useLayoutEffect,useState,} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

const Sn = () => {
  const navigation=useNavigation();

  useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown: false,
      });
  }, []);
  const [textInputValue1, setTextInputValue1] = useState('');
  const [getValue1, setGetValue1] = useState('');
  const saveValueFunction1 = () => {
    
    if (textInputValue1) {
      AsyncStorage.setItem('any_key_here1', textInputValue1);
      setTextInputValue1('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction1 = () => {
    AsyncStorage.getItem('any_key_here1').then(
      (value1) =>
        setGetValue1(value1),
    );
  };

  const [textInputValue3, setTextInputValue3] = useState('');
  const [getValue3, setGetValue3] = useState('');
  const saveValueFunction3 = () => {
    
    if (textInputValue3) {
      AsyncStorage.setItem('any_key_here3', textInputValue3);
      setTextInputValue3('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction3 = () => {
    AsyncStorage.getItem('any_key_here3').then(
      (value3) =>
        setGetValue3(value3),
    );
  };

  const [textInputValue4, setTextInputValue4] = useState('');
  const [getValue4, setGetValue4] = useState('');
  const saveValueFunction4 = () => {
    
    if (textInputValue4) {
      AsyncStorage.setItem('any_key_here4', textInputValue4);
      setTextInputValue4('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction4 = () => {
    AsyncStorage.getItem('any_key_here4').then(
      (value4) =>
        setGetValue4(value4),
    );
  };
  
  const [textInputValue2, setTextInputValue2] = useState('');
  const [getValue2, setGetValue2] = useState('');
  const saveValueFunction2 = () => {
    
    if (textInputValue2) {
      AsyncStorage.setItem('any_key_here2', textInputValue2);
      setTextInputValue2('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction2 = () => {
    AsyncStorage.getItem('any_key_here2').then(
      (value2) =>
        setGetValue2(value2),
    );
  };



  return (

    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
      <View style={styles.container}>
      

        <Text style={styles.h}>Emergency  Contacts</Text>
        <Text style={styles.titleText}>
          Enter Mom's/Gaurdian's Number
        </Text>
        <TextInput
          placeholder="Enter number"
          value={textInputValue1}
          onChangeText={(data) => setTextInputValue1(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction1}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Save Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction1}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Get Number
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue1}
        </Text>
       
        <Text style={styles.titleText}>
          Enter Dad's/Gaurdian's Number
        </Text>
        <TextInput
          placeholder="Enter number"
          value={textInputValue3}
          onChangeText={(data3) => setTextInputValue3(data3)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction3}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Save Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction3}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Get Number
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue3}
        </Text>

        <Text style={styles.titleText}>
          Enter Neighbour1's Number
        </Text>
        <TextInput
          placeholder="Enter number"
          value={textInputValue4}
          onChangeText={(data4) => setTextInputValue4(data4)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction4}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Save Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction4}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Get Number
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue4}
        </Text>

        <Text style={styles.titleText}>
          Enter Neighbour2's Number
        </Text>
        <TextInput
          placeholder="Enter number"
          value={textInputValue2}
          onChangeText={(data) => setTextInputValue2(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction2}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Save Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction2}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Get Number
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue2}
        </Text>

        <View style={styles.navigate}>
      <TouchableOpacity
        onPress={() =>{
            navigation.navigate('Start')
        }}>
      <View>
       <Text style={styles.back}>Back</Text>
      </View>
      </TouchableOpacity>
      </View>
      
      
      </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  p:{
    paddingVertical:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4EAD5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h:{
    paddingTop:40,
    fontSize:40,
    fontWeight:'bold',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonStyle: {
    fontSize: 16,
    backgroundColor: '#FDF7C3',
    padding: 5,
    marginTop: 32,
    borderWidth: 2,
    borderColor: "black",
    minWidth: 250,
  },
  buttonTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
    fontSize: 20,
  },
  navigate:{
    flexDirection:'row',
    paddingBottom:40,
    paddingLeft:80,
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
export default Sn;