import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import styles from "./styles";
import Header from "./header";
import BasketDishItems from "../../components/BasketDishListItem";

const order = orders[0];

const OrderDetailsScreen = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurants[0].dishes}
        renderItem={({ item }) => <BasketDishItems basketDish={item} />}
      />
    </View>
  );
};

export default OrderDetailsScreen;
