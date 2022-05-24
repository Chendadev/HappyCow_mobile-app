// In App.js in a new project
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// PAGES : 
import RestaurantsScreen from "./containers/RestaurantsScreen.js";
import RestaurantScreen from "./containers/RestaurantScreen.js";
import FavoritesScreen from "./containers/FavoritesScreen.js";
import MapScreen from "./containers/MapScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
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
                name="explo"
                options={{
                  tabBarLabel: "Exploration",
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="search" size={size} color={color} />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                  // screenOptions={{
                  //   headerTitle: () => <RestaurantsScreen />
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
                      {() => <RestaurantScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              {/* BOUTON FAVORIS */}
              <Tab.Screen
                name="Favoris"
                options={{
                  tabBarLabel: "favoris",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="hearto" size={24} color="black" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerTitle: () => <FavoritesScreen />
                    }}
                  >

                    <Stack.Screen
                      name="Favoris"
                      options={{
                        title: "favoris",
                      }}
                    >
                      {() => <FavoritesScreen />}
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
                      name="Map"
                      options={{
                        title: "map",
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