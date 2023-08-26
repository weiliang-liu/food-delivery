import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen'
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from "./assets/data/restaurants.json"
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import BasketScreen from "./src/screens/BasketScreen";
import OrderScreen from "./src/screens/OrderScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrderScreen /> */}
      <OrderDetailsScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})