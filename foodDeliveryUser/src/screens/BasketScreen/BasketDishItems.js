import { View, Text, StyleSheet } from "react-native";

import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketDishItems = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{basketDish.name}</Text>
      <Text style={styles.itemPrice}>${basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  itemPrice: {
    marginLeft: "auto",
  },
  itemName: {
    fontWeight: 600,
  },
});

export default BasketDishItems;
