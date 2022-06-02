import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// PAGES : 
import RestaurantsScreen from "./containers/RestaurantsScreen.js";
import RestaurantScreen from "./containers/RestaurantScreen.js";
import FavoritesScreen from "./containers/FavoritesScreen.js";
import MapScreen from "./containers/MapScreen.js";

//components : 
import Logo from "./components/Logo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [favorites, setFavorites] = useState([]);
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <Logo />
        }}
      >

        <Stack.Screen name="Restaurants">
          {() => (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "gray",
              }}
            >

              <Tab.Screen
                name="exploration"
                options={{
                  tabBarLabel: "Exploration",
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="search" size={size} color={color} />
                  )
                }}
              >

                {() => (
                  <Stack.Navigator
                  // screenOptions={{
                  //   headerTitle: () => <Logo />
                  // }}
                  >
                    <Stack.Screen
                      name="Explorerbis"
                      options={{
                        title: "Liste Restau",
                      }}
                    >

                      {() => <RestaurantsScreen />}
                    </Stack.Screen>
                    <Stack.Screen
                      name="Restaurant"
                    >

                      {(props) => <RestaurantScreen favorites={favorites} setFavorites={setFavorites} {...props} />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              {/* BOUTON FAVORIS */}
              <Tab.Screen
                name="Favorisss"
                options={{
                  tabBarLabel: "favoriss",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="hearto" size={24} color="black" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                  // screenOptions={{
                  //   headerTitle: () => <FavoritesScreen />
                  // }}
                  >

                    <Stack.Screen
                      name="Favoris"
                      options={{
                        title: "favoris",
                      }}
                    >
                      {(props) => (<FavoritesScreen favorites={favorites} setFavorites={setFavorites} {...props} />)}
                    </Stack.Screen>

                  </Stack.Navigator>
                )}
              </Tab.Screen>

              {/* BOUTON MAP */}
              <Tab.Screen
                name="Map"
                options={{
                  tabBarLabel: "map",
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="map-pin" size={24} color="black" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerTitle: () => <MapScreen />
                    }}
                  >

                    <Stack.Screen
                      name="MapPage"
                      options={{
                        title: "maap",
                      }}
                    >
                      {() => <MapScreen />}
                    </Stack.Screen>

                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;