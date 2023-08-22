import { StyleSheet, FlatList, StatusBar, View } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json"

export default function HomeScreen(){
    return (
        <View style = {styles.page}>
            <FlatList
                data = {restaurants}
                renderItem={({item}) => <RestaurantItem restaurant={item}/>}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    );a
}

const styles =StyleSheet.create({
    page:{
        padding:20,
    }
})