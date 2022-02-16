import React from "react";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import Keyboard from "../components/Keyboard.js";
import GameBoard from "../components/GameBoard.js";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: screen.height,
    width: screen.width,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <GameBoard />
      <Keyboard />
    </View>
  );
};
