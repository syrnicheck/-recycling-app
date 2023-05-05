import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SearchScreen from "../screens/SearchScreen";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return null;
          },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold", color: "#000" },
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
        <Tab.Screen name="Поиск" component={SearchScreen} />
        <Tab.Screen name="Карта" component={MapScreen} />
        <Tab.Screen name="Профиль" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
