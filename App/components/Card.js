import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "15%",
    aspectRatio: 1,
    backgroundColor: "grey",
    margin: 5,
  },
});

export default () => {
  return <View style={styles.card} />;
};
