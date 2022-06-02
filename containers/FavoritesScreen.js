import AsyncStorage from "@react-native-async-storage/async-storage"
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import { useEffect, useState } from "react";

export default function FavoritesScreen({ favorites, setFavorites }) {
    console.log("tom");
    console.log(favorites);
    const [isLoading, setIsLoading] = useState(true);
    const [description, setDescription] = useState();
    useEffect(() => {

        const fetchFav = async () => {
            try {
                const newFavorite = await AsyncStorage.getItem("favorites");
                const toParseFav = JSON.parse(newFavorite);
                setFavorites(toParseFav);
            } catch (error) {
                console.log(error.message);
            }
            setIsLoading(false);
        };
        fetchFav();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <Text>Chargement...</Text>
            ) : favorites === null ? (
                <Text>Pas de favoris</Text>
            ) : (
                <View>
                    {favorites.map((item, index) => {
                        return (
                            <View style={styles.containerItem} key={index}>
                                <View>
                                    <Image
                                        style={styles.images}
                                        source={{ uri: item.pictures[0] }}
                                    />
                                </View>

                                <View style={styles.rightBlock}>
                                    <View style={styles.names}>
                                        <Text style={{ fontWeight: "700" }}>
                                            {item.name}
                                        </Text>
                                    </View>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setDescription(!description);
                                        }}
                                    >
                                        <View style={styles.descriptions}>
                                            <Text numberOfLines={description ? null : 2}>
                                                {item.description}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
    },

    containerItem: {
        flexDirection: "row",
    },

    images: {
        width: 120,
        height: 120,
        margin: 10,
    },

    rightBlock: {
        margin: 10,

        width: "65%",
        marginLeft: 5,
    },
    descriptions: {
        width: "100%",
    },
});
