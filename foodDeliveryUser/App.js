import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen'
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from "./assets/data/restaurants.json"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RestaurantDetailScreen /> */}
      <HomeScreen/>
      {/* <RestaurantItem restaurant={restaurants[0]}/> */}
      <StatusBar style="auto" />
    </View>
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