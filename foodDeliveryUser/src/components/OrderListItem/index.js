import { View, Text, Image, StyleSheet } from "react-native";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
        <Text style={styles.orderDetails}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  page: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  restaurantName: {
    fontWeight: "600",
    fontSize: 16,
  },
  orderDetails: {
    marginVertical: 5,
  },
});

export default OrderListItem;
