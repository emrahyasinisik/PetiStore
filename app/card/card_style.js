import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
    width: Dimensions.get("window").width / 2.23,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eceff1",
    borderRadius: 10,
    shadowColor: "#000",
    padding: 5,
    marginVertical: -1,
  },
  image: { width: 150, height: 150 },
  image_container: {
    margin: 10,
    alignItems: "center",
    height: Dimensions.get("window").height / 6,
  },
  title: { fontWeight: "bold", fontSize: 18 },
  price: { color: "gray", marginVertical: 3 },
  inStock: { fontSize: 14, color: "red" },
});
