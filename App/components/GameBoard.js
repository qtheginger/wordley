import React from "react";
import { View, text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-evenly",
    alignContent: "space-around",
  },
  card: {
    width: "15%",
    aspectRatio: 1,
    backgroundColor: "grey",
    margin: 5,
  },
  gameBoard: {
    flex: 1,
  },
});

export default () => {
  return (
    <View style={styles.gameBoard}>
      <View style={styles.container}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
      <View style={styles.container}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
      <View style={styles.container}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
      <View style={styles.container}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
      <View style={styles.container}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
      <View style={styles.container}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
    </View>
  );
};
