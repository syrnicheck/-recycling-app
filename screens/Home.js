import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyCarousel from "../components/MyCarousel";

const Home = () => {
  const navigation = useNavigation();

  const goToSearchScreen = () => {
    navigation.navigate("Поиск");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerMain}>
          <Text style={styles.title}>Добро пожаловать!</Text>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={goToSearchScreen}
          >
            <Text style={styles.searchButtonText}>Перейти к поиску</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Может быть интересно</Text>
        </View>
        <View style={styles.containerCarousel}>
          <MyCarousel />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    padding: 20,
  },
  containerCarousel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchButton: {
    marginVertical: 16,
    backgroundColor: "#5ac1d7",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 50,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
