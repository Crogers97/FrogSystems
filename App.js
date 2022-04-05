import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Image } from 'react-native';
import CardItem from './components/CardItem';



export default function App() {
  return (
    <View style={styles.container}>

      <CardItem />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53b7ec',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

});
