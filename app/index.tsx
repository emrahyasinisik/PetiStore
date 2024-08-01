import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import Card from "./card/card";
import data from "./data.json";

export default function Index() {
  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1);
  }
  function deupdateCounter() {
    setCounter(counter - 1);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40 }}>Counter:{counter}</Text>
      <Button title="Update Counter" onPress={updateCounter}></Button>
      <Button title="deUpdate Counter" onPress={deupdateCounter}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", marginBottom: 30 },
  searchbar: {
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#eceff1",
  },
  patika: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "purple",
  },
});
