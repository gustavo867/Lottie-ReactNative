import React from 'react';
import { SafeAreaView, Button, Alert, Text } from 'react-native';
import Lottie from 'lottie-react-native';

import rocket from './rocket.json';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20}}>Testing Lottie</Text>
      <Lottie resizeMode= "contain" autoSize source={rocket} autoPlay loop/>
      <Button 
      onPress={() => {
        Alert.alert("Testing Lottie")
      }}
      title="Rocket Lottie"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
}

