import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import SliderDiscovery from '../components/SliderDiscovery'

const Discover = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>FINANCIAL NEWS.</Text>
    <View style={{marginTop: 15}}>
      <SliderDiscovery />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0093E9',
    height: '100%'
  },
  title: {
      color: 'white',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 37,
      textAlign: 'center',
      marginTop: 40,
      borderWidth: 2,
      borderColor: 'white',
      marginHorizontal: 13
  },
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 5,
    padding : 10,
  }

});

export default Discover