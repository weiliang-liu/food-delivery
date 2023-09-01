import { View, Text, FlatList } from "react-native";

import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrderScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      ></FlatList>
    </View>
  );
};

const styles = {
  page: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
  },
};

export default OrderScreen;
