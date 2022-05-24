import { Text, View, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import data from "../assets/data.json";
import { useNavigation } from "@react-navigation/core";

// page : 
import RestaurantScreen from "./RestaurantScreen";

export default function RestaurantsScreen() {
    const navigation = useNavigation();
    const stars = (nbEtoile) => {
        const array = [];
        for (let i = 0; i < 5; i++) {
            if (i < nbEtoile) {
                array.push(<AntDesign name="star" size={15} color="orange" />);
            } else {
                array.push(<AntDesign name="star" size={15} color="grey" />);
            }
        }
        return array;
    };

    return (
        <View>
            <FlatList
                data={data}
                renderItem={
                    ({ item }) => {
                        return (
                            <SafeAreaView>
                                <View style={styles.container}>
                                    <View style={styles.containerRestaurant}>
                                        <View style={styles.leftBloc}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate("Restaurant", { Restaurant: item })
                                                }}
                                            >
                                                <Image source={{ uri: item.thumbnail }}
                                                    style={styles.imgRestaurant}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.rightBloc}>
                                            <View style={styles.leftRightBloc}>
                                                <Text style={[styles.color, styles.textWeight, styles.title]}>{item.name}</Text>
                                                <View style={styles.stars}>
                                                    {stars(item.rating)}
                                                </View>
                                                <Text style={styles.color}
                                                    numberOfLines={1}
                                                >
                                                    {item.description}
                                                </Text>

                                            </View>
                                            <View style={styles.rightRightBloc}>
                                                <Text style={styles.color}>{item.type}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </SafeAreaView>
                        )
                    }
                }
            />
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerRestaurant: {
        flexDirection: "row",
        alignItems: "center"
    },
    imgRestaurant: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    title: {
        fontSize: 15
    },
    stars: {
        flexDirection: "row"
    },
    leftBloc: {
        // borderWidth: 2,
        // borderColor: "blue",

        // backgroundColor: "pink"
    },
    rightBloc: {
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        height: "100%",
    },
    leftRightBloc: {
        // borderWidth: 5,
        // borderColor: "green",
        justifyContent: "center",
        width: "50%"
    },
    rightRightBloc: {
        justifyContent: "center",
        // borderWidth: 5,
        // borderColor: "purple",
        width: "50%"
    },
    blocDesc: {
        justifyContent: "center",
        width: "80%",
        marginVertical: 10
    },
    textDesc: {
        textAlign: "justify",
    },
    flatList: {
        flex: 1
    },
    color: {
        color: "black"
    },
    textWeight: {
        fontWeight: "bold"
    }
});