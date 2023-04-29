import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>Мой профиль</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Изменить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Имя:</Text>
        <Text style={styles.info}>Катя</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>Kate@email.com</Text>
        <Text style={styles.label}>Телефон:</Text>
        <Text style={styles.info}>123-456-7890</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#5ac1d7",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#5ac1d7",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
