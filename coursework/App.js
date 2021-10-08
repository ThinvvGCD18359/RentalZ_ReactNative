import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import RentForm from './screens/rentForm';

export default function App() {
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}> 
        <RentForm/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})