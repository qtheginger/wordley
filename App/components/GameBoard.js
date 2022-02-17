import React, { useContext, useState } from "react";
import { View, text, StyleSheet, Dimensions } from "react-native";
import Card from "./Card";

import { GameContext } from "../util/gameContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "15%",
    aspectRatio: 1,
    backgroundColor: "grey",
    margin: 5,
  },
  gameBoard: {
    flex: 3,
    marginBottom: screen.height * 0.05,
  },
});

export default () => {
  const { keyVal, setKeyVal } = useContext(GameContext);
  return (
    // create state counter and function that will
    // use state count to push keyVal to correct box
    // replace with for loops like keyboard
    <View style={styles.gameBoard}>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};
