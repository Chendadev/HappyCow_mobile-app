import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView from "react-native-maps";
import * as Location from "expo-location";
import mydata from "../assets/data.json";
import { useEffect, useState } from "react";

// container : 
import RestaurantScreen from "./RestaurantScreen";

export default function MapScreen({ navigation }) {

    const [data, setData] = useState(mydata);
    const [isLoading, setIsLoading] = useState(true);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        const getPermissionAndLocationAndFetchData = async () => {
            try {
                // ask permission : 
                const { status } = await Location.requestForegroundPermissionsAsync();
                // console.log("status:", status);
                let response = mydata;
                if (status === "granted") {
                    const location = await Location.getCurrentPositionAsync();
                    // console.log(location);
                    setLatitude(location.coords.latitude);
                    setLongitude(location.coords.longitude);
                } else {
                    setError(true);
                }
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        getPermissionAndLocationAndFetchData();
    }, []);

    return isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="green" />
        </View>
    ) : (
        <View style={{ flex: 1 }}>
            <MapView
                showUserLocation={true}
                style={{ height: "100%" }}
                initialRegion={{
                    latitude: latitude ? latitude : 48.866667,
                    longitude: longitude ? longitude : 2.333333,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }}
            >
                {mydata.map((company, index) => {

                    console.log(company.type)
                    return (
                        <MapView.Marker
                            onPress={() => {
                                navigation.navigate("Restaurant", { id: company.placeId })
                            }}
                            // pinColor={checkColor(company.type)}
                            key={index}
                            coordinate={{
                                latitude: company.location.lat,
                                longitude: company.location.lng
                            }}
                        />
                    )
                })}
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});