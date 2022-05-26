import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import mydata from "../assets/data.json";

export default function FilterList() {
    return (
        <View style={styles.container}>
            <View style={styles.direction}>
                <TouchableOpacity style={styles.filterContainer}>
                    <Text style={styles.title}>
                        vegan
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterContainer}>
                    <Text style={styles.title}>
                        vegetarien
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterContainer}>
                    <Text style={styles.title}>
                        autres
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHeight: 80,
        backgroundColor: "#a5aa52",
        marginBottom: 10
    },
    direction: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "space-around"
    },
    title: {
        fontSize: 19,
        color: "black",
        fontWeight: "bold"
    }
});