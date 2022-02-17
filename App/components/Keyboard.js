import React, { useState, useContext } from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import Key from "./Key.js";
import KeyName from "../data/KeyName.json";

import { GameContext } from "../util/gameContext.js";

const styles = StyleSheet.create({
  keyBoard: {
    flex: 1,
    justifyContent: "space-around",
  },
  keyBoardLine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    // height: "80%",
  },
});

export default () => {
  const { keyVal, setKeyVal } = useContext(GameContext);
  let rowOne = [];
  let rowTwo = [];
  let rowThree = [];

  // loop through keyName to display keyboard
  for (let i = 0; i < KeyName.length; i++) {
    if (i < 10) {
      rowOne.push(
        <Key onPress={(keyVal) => setKeyVal(KeyName[i])} key={i} index={i} />
      );
    } else if (i === 10 || i < 19) {
      rowTwo.push(
        <Key onPress={(keyVal) => setKeyVal(KeyName[i])} key={i} index={i} />
      );
    } else {
      rowThree.push(
        <Key onPress={(keyVal) => setKeyVal(KeyName[i])} key={i} index={i} />
      );
    }
  }
  console.log(keyVal);
  return (
    <>
      <View style={styles.keyBoard}>
        <View style={styles.keyBoardLine}>{rowOne}</View>
        <View style={styles.keyBoardLine}>{rowTwo}</View>
        <View style={styles.keyBoardLine}>{rowThree}</View>
      </View>
    </>
  );
};
