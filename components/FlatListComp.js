
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import mydata from "../assets/data.json";


export default function FlatListComp() {
    const [filteredData, setFilteredData] = useState(mydata);
    const navigation = useNavigation();

    const filterByType = (diet) => {

        let finalTab = [];
        if (diet) {
            for (let i = 0; i < mydata.length; i++) {
                if (mydata[i].type === diet) {
                    finalTab.push(mydata[i])
                }
            }
            return finalTab;
        } else {
            return mydata;
        }

    }

    const stars = (nbEtoile) => {
        const array = [];
        for (let i = 0; i < 5; i++) {
            if (i < nbEtoile) {
                array.push(<AntDesign name="star" size={15} color="orange" key={i} />);
            } else {
                array.push(<AntDesign name="star" size={15} color="grey" key={i} />);
            }
        }
        return array;
    };

    return (
        <View>
            <View style={styles.menuDiet}>
                <TouchableOpacity onPress={() => {
                    setFilteredData(filterByType("vegan"));

                }}>
                    <Text style={[styles.textWeight, styles.purple]}>VEGAN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    setFilteredData(filterByType("vegetarian"));

                }}>
                    <Text style={[styles.textWeight, styles.purple]}>VEGETARIAN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    setFilteredData(filterByType("Veg Store"));

                }}>
                    <Text style={[styles.textWeight, styles.purple]}>VEG STORE</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredData}
                keyExtractor={item => item.placeId}
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
}

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
    },
    menuDiet: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#6cc551",
        minHeight: 50,
    },
    purple: {
        color: "#6f35c0",
    }
});