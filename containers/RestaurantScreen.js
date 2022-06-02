import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/core";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RestaurantScreen({ favorites, setFavorites }) {
    const { params } = useRoute();
    const savFav = async () => {
        const newFav = params.Restaurant;
        const arrayFav = JSON.parse(
            await AsyncStorage.getItem("favorites")
        );
        if (arrayFav === null) {
            const newArrayOfFavs = []
            newArrayOfFavs.push(newFav)
            console.log('if')
            console.log(newArrayOfFavs)
            await AsyncStorage.setItem("favorites", JSON.stringify(newArrayOfFavs))
        } else {
            console.log('else')
            arrayFav.push(newFav);
            await AsyncStorage.setItem("favorites", JSON.stringify(arrayFav))
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Button title='remove' onPress={async () => {
                    await AsyncStorage.removeItem("favorites")
                }} />
                <Button title='remove' onPress={async () => {
                    console.log(await AsyncStorage.getItem("favorites"))
                }} />
                <View>
                    <View>

                        <View>
                            <FlatList
                                horizontal={true}
                                data={params.Restaurant.pictures}
                                keyExtractor={(item, index) => index}
                                renderItem={
                                    ({ item }) => {
                                        return (
                                            <View>
                                                <ImageBackground source={{ uri: item }}
                                                    style={styles.imgRestaurant}
                                                />
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                        <View style={styles.header}>
                            <View style={styles.leftBloc}>
                                <Text style={styles.title}>{params.Restaurant.name}</Text>
                                <Text style={styles.informations}>{params.Restaurant.rating} / 5</Text>
                            </View>
                        </View>

                        <View style={styles.infoRestaurant}>
                            <Text style={styles.informations}>{params.Restaurant.address}</Text>
                            <Text style={styles.informations}>{params.Restaurant.phone}</Text>
                            <Text style={styles.informations}>{params.Restaurant.description}</Text>

                        </View>
                        <View style={styles.blocButton}>
                            <TouchableOpacity style={styles.favButton}
                                onPress={savFav}
                            >
                                <Text
                                    style={styles.informations}
                                >Add to Fav</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginVertical: 90
    },
    header: {
        flexDirection: "row"
    },
    leftBloc: {
        // backgroundColor: "purple",
        marginLeft: 10
    },
    // rightBloc: {
    //     backgroundColor: "yellow",
    //     height: 50,
    //     width: 100,
    //     backgroundColor: "black",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginBottom: 40,
    // },
    icon: {
        width: 120,
        height: 40
    },
    imgRestaurant: {
        width: 500,
        height: 300,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
    },
    infoRestaurant: {
        alignItems: "center",
        backgroundColor: "beige",
        marginVertical: 30,
        justifyContent: "center"
    },
    informations: {
        width: "80%",
        fontSize: 18,
        fontWeight: "bold",
        // textAlign: "center"
    },
    blocButton: {
        justifyContent: "center",
        backgroundColor: "pink",
        width: "30%",
        height: 50,
        alignItems: "center",
    },
    favButton: {
        // alignContent: "center",
        alignItems: "center",
        // textAlign: "center",
    }
});