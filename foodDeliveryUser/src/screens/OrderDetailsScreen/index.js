import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import Header from "./header";

const order = orders[0];

const OrderDetailsScreen = () => {
  return (
    <FlatList
      data={restaurants[0].dishes}
      renderItem={(item) => <DishListItem />}
    />
  );
};

export default OrderDetailsScreen;
