import React, { useState, useContext } from "react";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import Keyboard from "../components/Keyboard.js";
import GameBoard from "../components/GameBoard.js";
import { GameContextProvider } from "../util/gameContext.js";

// This file is the screen which will display the entire gameboard when in game

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    // avoid status bar
    marginTop: StatusBar.currentHeight,
    //full height and width
    height: screen.height,
    width: screen.width,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <GameContextProvider>
        <GameBoard />
        <Keyboard />
      </GameContextProvider>
    </View>
  );
};
