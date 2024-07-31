import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import Card from "./card/card";
import data from "./data.json";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.patika}>PATIKASTORE</Text>
      </View>
      <View>
        <TextInput style={styles.searchbar} placeholder="Ara..."></TextInput>
      </View>
      <FlatList style={styles.container}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={data}
        renderItem={({ item }) => <Card card={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", marginBottom:30},
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
