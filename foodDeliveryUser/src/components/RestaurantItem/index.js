import { StyleSheet, Text, Image, View } from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
import { useState } from "react";
import {Asset} from 'expo-asset'

const RestaurantItem = ({restaurant}) => {
    //[path, setPath] = useState("./pizza.png")
    //if(restaurant.image != "./pizza.png")
    //setPath(restaurant.image)
    console.log(restaurant.image)
    return (
        <View style = {styles.restaurantContainer}>
            <Image
                //need to fix this.
                source = {{ uri : restaurant.image}}
                //source = {require("./pizza.png")}
                style={styles.image}
            />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>
                        $ {restaurant.deliveryFee}&#8226; {restaurant.minDeliveryTime} -
                        {restaurant.maxDeliveryTime} minutes
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating}</Text>
                </View>
            </View>
        </View>
    );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer:{
        width: "100%",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        aspectRatio : 5 /3,
        marginBottom: 5,
    },
    title: {
        left:3,
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
    subtitle: {
        left : 3,
        color: "grey",
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    rating:{
        marginLeft:"auto",
        backgroundColor:"lightgray",
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
});