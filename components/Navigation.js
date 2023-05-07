import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import MapScreen from "../screens/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import CategoryList from "../screens/CategoryList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Назад"
        component={SearchScreen}
        options={{
          headerShown: false,
          headerTintColor: "#5ac1d7",
        }}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={{
          headerShown: true,
          headerTitle: " ",
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return null;
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#000",
          },
          tabBarLabel: route.name,

          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: "#707070",
            shadowOffset: {
              width: 0,
              height: -1,
            },
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowOpacity: 1,
            elevation: 5,
          },
          headerStyle: {
            backgroundColor: "#01977f",
            borderBottomWidth: 1,
            borderBottomColor: "#f1f1f1",
          },
        })}
      >
        <Tab.Screen name="Главная" component={Home} />
        <Tab.Screen name="Поиск" component={SearchStack} />
        <Tab.Screen name="Карта" component={MapScreen} />
        <Tab.Screen name="Профиль" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
