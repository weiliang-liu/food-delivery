import { StyleSheet, Text, Image, View } from "react-native";

const MenuItem = ({item}) => {
    return (
        <View style = {styles.container}>
            <View style = {{flex : 1}}>
                <Text style = {styles.name}>{item.name}</Text>
                <Text style = {styles.description} numberOfLines={2}>{item.description}</Text>
                <Text style = {styles.price}>{item.price}</Text>
            </View>
            {/* <Image source={require("./pizza.png")} style = {styles.image}/> */}
        </View>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container : {
        paddingVertical : 10,
        marginVertical : 10,
        marginHorizontal : 20,
        paddingBottom : 10,
        borderBottomColor : "lightgrey",
        borderBottomWidth : 1,
        flexDirection: "row"
    },
    name : {
        fontWeight : "600",
        fontSize : 16,
        letterSpacing : 0.5
    },
    description : {
        color : "gray",
        marginVertical : 5
    },
    price : {
        fontSize : 16
    },
    image : {
        height : 100,
        aspectRatio : 1
    }
});