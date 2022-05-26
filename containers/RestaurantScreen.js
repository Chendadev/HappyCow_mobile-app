import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native'
import data from "../assets/data.json"
import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/core";
import { useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RestaurantScreen() {
    const [favorites, setFavorites] = useState([]);
    const { params } = useRoute();
    console.log(params);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.blocRestaurant}>
                <View style={styles.blocTitle}>
                    <Text style={styles.title}>{params.Restaurant.name}</Text>
                </View>
                <Image source={{ uri: params.Restaurant.thumbnail }}
                    style={styles.imgRestaurant}
                />
                <View style={styles.infoRestaurant}>
                    <Text style={styles.informations}>{params.Restaurant.name}</Text>
                    <Text style={styles.informations}>{params.Restaurant.phone}</Text>
                    <Text style={styles.informations}>{params.Restaurant.rating}</Text>
                </View>
            </View>
            <View style={styles.blocButton}>
                <TouchableOpacity style={styles.favButton}>
                    <Text onPress={() => {
                        const favs = [...favorites];
                        favs.push(params.Restaurant);
                        setFavorites(favs) //favs
                        console.log(favs)
                    }}>Add to Fav</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f0fa"
    },
    blocTitle: {
        marginVertical: 20
    },
    blocRestaurant: {
        backgroundColor: "#8566cc",
        borderRadius: 5,
        width: "90%",
        height: 500,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    imgRestaurant: {
        width: "100%",
        height: 150,
        borderRadius: 5,
        marginVertical: 10

    },
    infoRestaurant: {
        marginTop: 30,
        // backgroundColor: "#9d85d6",
        backgroundColor: "red",
        borderRadius: 5,
        alignItems: "center",
        padding: 15
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
    },
    informations: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    blocButton: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 15
    },
    favButton: {
        backgroundColor: "#6cc551",
        borderRadius: 5,
        width: "60%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    }
});