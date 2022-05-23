// In App.js in a new project
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// PAGES : 
import RestaurantsScreen from "./containers/RestaurantsScreen.js";
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
                name="Explorer"
                options={{
                  tabBarLabel: "Explorer",
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="search" size={size} color={color} />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerTitle: () => <RestaurantsScreen />
                    }}
                  >

                    <Stack.Screen
                      name="Explorer"
                      options={{
                        title: "Explorer",
                      }}
                    >
                      {() => <RestaurantsScreen />}
                    </Stack.Screen>

                  </Stack.Navigator>
                )}
              </Tab.Screen>

              {/* BOUTON FAVORIS */}
              <Tab.Screen
                name="Favoris"
                options={{
                  tabBarLabel: "Favoris",
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
                        title: "Favoris",
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
                  tabBarLabel: "Map",
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
                        title: "Map",
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