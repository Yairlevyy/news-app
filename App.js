import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Discover from './Screens/Discover';
import Settings from './Screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
          backgroundColor:'white',
          position : 'absolute',
          bottom : 30,
          marginHorizontal : 20,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 5,
            height: 5,
          },


        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <View><AntDesign name="home" size={30} color={focused ? '#3266a8' : 'grey'} /></View>
          ),
          
        }} />
        <Tab.Screen name="Discover" component={Discover} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons name="text-box-search-outline" size={30} color={focused ? '#3266a8' : 'grey'} />
            </View>
        )}}/>
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons name="settings-outline" size={30} color={focused ? '#3266a8' : 'grey'} />
            </View>
        )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
