import { Text, View, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, } from "react-native";
import { useState } from "react"
import data from "../assets/data.json";

// containers : 
import RestaurantScreen from "./RestaurantScreen";

// component: 
import SearchInput from "../components/SearchInput";
import FilterList from "../components/FilterList";
import FlatListComp from "../components/FlatListComp";
export default function RestaurantsScreen() {

    return (

        <View>
            <FlatListComp />
        </View>
    )

};
