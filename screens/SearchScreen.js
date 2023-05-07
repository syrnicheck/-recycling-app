import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  PlasticIcon,
  MetalIcon,
  PaperIcon,
  OrganicIcon,
  GlassIcon,
} from "../svgComponets/SvgComponents";
import { createStackNavigator } from "@react-navigation/stack";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const icons = [PlasticIcon, PaperIcon, GlassIcon, MetalIcon, OrganicIcon];
  const texts = ["Пластик", "Бумага", "Стекло", "Металл", "Органика"];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.containerSearch}>
        <Text style={styles.title}>Фильтры</Text>
        <View style={styles.containerCategory}>
          {icons.map((Icon, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() =>
                navigation.navigate("CategoryList", { category: texts[index] })
              }
            >
              <Icon style={styles.image} />
              <Text style={styles.text}>{texts[index]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.title}>Поиск приема вторсырья</Text>
        <TextInput
          placeholder="Введите запрос"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Поиск</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCategory: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
  },
  containerSearch: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchInput: {
    height: 45,
    fontSize: 18,
    marginVertical: 16,
    paddingHorizontal: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  searchButton: {
    marginVertical: 16,
    backgroundColor: "#5ac1d7",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  centerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  centerAddress: {
    fontSize: 16,
  },
});

export default SearchScreen;
