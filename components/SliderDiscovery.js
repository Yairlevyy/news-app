import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, StatusBar, TextInput } from 'react-native';
import Card from './Card';
import { dataSet} from '../Data';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH - 70

const SliderDiscovery = () => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(()=>{
        setFilteredDataSource(dataSet);
        setMasterDataSource(dataSet);
    }, [])

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.source
              ? item.source.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };

  return (
    <View>
        <StatusBar  
     backgroundColor = "#0093E9"  
     barStyle = "light-content"   
    />  

    <View>
      <TextInput style={styles.input}
      placeholder='חיפוש מתוך האתרים המובילים בישראל... '
      onChangeText={(text)=> searchFilterFunction(text)}
      />
    </View>
      
      <FlatList 
      data={filteredDataSource}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      renderItem={Card}
      showsHorizontalScrollIndicator={false}
      style={{marginTop:10}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'white',
      borderRadius: 5,
      padding : 10,
    }
  
  });

export default SliderDiscovery;