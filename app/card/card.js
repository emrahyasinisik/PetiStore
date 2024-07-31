import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./card_style";
const Card = ({ card }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{ uri: card.imgURL }} />
        </View>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{card.title}</Text>
          <Text style={styles.description}>{card.price}</Text>
          <Text style={styles.inStock}>
            {card.inStock == false ? "Stokya Yok" : ""}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
