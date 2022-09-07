import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity, Linking} from 'react-native'
import React from 'react'

const Card = ({item,index }) => {
  
    const openUrl = (url) => {
        Linking.openURL(url)
    }

    return (
    <View style={styles.main}>
    <View style={styles.container}>
    <View  style={styles.center}>  
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.content}>{item.description}</Text> */}
    </View>
      <View style={styles.containerInfo}>
      <Text style={styles.source}>{item.source}</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => openUrl(item.link)}>
        <Text style={styles.buttonText}>קריאת כל המאמר</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        width: width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: '0.5',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20
    },
    container: {
        width: width * 0.80,
        height: height * 0.58,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,

    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        width: 260,
        height: 250,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'justify',
        marginTop: 10,
    },
    content: {
        textAlign: 'justify',
        fontSize: 17,
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    containerInfo: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems:'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    source: {
        fontSize: 15,
        color: 'grey'
    },
    button: {
        backgroundColor: '#3266a8',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    }

})
export default Card;