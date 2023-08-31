import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
import MenuItem from "../../components/MenuList";
import {Ionicons} from "@expo/vector-icons"
import { useRoute, useNavigation } from "@react-navigation/native";
const restaurant = restaurants[0];

const Header = () => {
  return (
    <View>
      <Image source={{ url: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

const RestaurantDetailPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  //   const id = route.params?.id;
  //   console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle"
          size={45}
          color={"white"}
          style={styles.imageIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 30,
    left: 10,
  },
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});

export default RestaurantDetailPage