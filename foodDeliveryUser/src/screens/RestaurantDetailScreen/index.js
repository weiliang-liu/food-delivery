import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
import MenuItem from "../../components/MenuList";
import {Ionicons} from "@expo/vector-icons"
const restaurant = restaurants[0]

const RestaurantDetailPage = () =>{
    return (
        <View style = {styles.page}>
            <Image source = {require("./pizza.png")} style={styles.image}/>
            <View style = {styles.iconContainer}>
                <Ionicons
                    name = "arrow-back-circle"
                    size = {45}
                    color={"white"}
                    style = {styles.imageIcon}
                />
            </View>
            <View style = {styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    $ {restaurant.deliveryFee}&#8226; {restaurant.minDeliveryTime} -
                    {restaurant.maxDeliveryTime} minutes
                </Text>
            </View >
            <MenuItem item = {restaurants[0]}/>
            {/* <FlatList
                data = {restaurants[0]}
                renderItem={({items}) => <MenuItem item={items}/>}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin : 10,
    },
    iconContainer : {
        position : "absolute",
        top : 30,
        left : 10,
    },
    page:{
        flex:1,
    },
    image:{
        width:"100%",
        aspectRatio:5/3
    },
    title:{
        fontSize:35,
        fontWeight:"500",
        marginVertical : 10,
    },
    subtitle:{
        fontSize:15,
        color:"grey",
    }
})

export default RestaurantDetailPage