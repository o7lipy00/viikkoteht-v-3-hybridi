// screens/SecondScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

 export default function  SecondScreen  ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>
      <Button
        title="Go Back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

