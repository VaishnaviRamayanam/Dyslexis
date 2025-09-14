import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Sound from 'react-native-sound';

const TTSApp = () => {
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('');

  const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';
  const TTS_URL = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

  const handleTextToSpeech = async () => {
    if (!inputText) {
      setStatus('Please enter some text.');
      return;
    }

    setStatus('Processing...');

    try {
      const response = await axios.post(TTS_URL, {
        input: { text: inputText },
        voice: { languageCode: 'en-US', ssmlGender: 'FEMALE' },
        audioConfig: { audioEncoding: 'MP3' },
      });

      const audioContent = response.data.audioContent;
      const sound = new Sound(`data:audio/mp3;base64,${audioContent}`, '', (error) => {
        if (error) {
          console.log('Error loading sound:', error);
          setStatus('Failed to play audio.');
          return;
        }
        sound.play((success) => {
          if (success) {
            setStatus('Audio played successfully.');
          } else {
            setStatus('Audio playback failed.');
          }
        });
      });
    } catch (error) {
      console.error('Error during TTS processing:', error);
      setStatus('Error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text-to-Speech App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Convert to Speech" onPress={handleTextToSpeech} />
      {status ? <Text style={styles.status}>{status}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  status: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default TTSApp;
