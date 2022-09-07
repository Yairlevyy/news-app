import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import SliderHome from '../components/SliderHome';


const Home = () => {
    return (
    <View style={styles.body}>
      <Text style={styles.title}>FINANCIAL NEWS.</Text>
    <View style={styles.container}>
        <SliderHome />
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
        marginTop: 55,
    },

  });
  

export default Home