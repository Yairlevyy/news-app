import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, StatusBar } from 'react-native';
import Card from './Card';
import { dataSet} from '../Data';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH - 70



const SliderHome = () => {
  const [data, setData] = useState([]);

  
  return (
    <View>
        <StatusBar  
     backgroundColor = "#0093E9"  
     barStyle = "light-content"   
    />  

      <FlatList 
      data={dataSet}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      renderItem={Card}
      showsHorizontalScrollIndicator={false}
      />
      <Text></Text>
    </View>
  )
}

export default SliderHome;




