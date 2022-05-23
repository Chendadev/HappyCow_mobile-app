// In App.js in a new project
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from '@expo/vector-icons';
// PAGES : 
import RestaurantsScreen from "./containers/RestaurantsScreen.js";

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
        <Stack.Screen name="Restaurant">
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

            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;