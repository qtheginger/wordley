import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import { GameContext } from "../util/gameContext";

const styles = StyleSheet.create({
  card: {
    width: "15%",
    aspectRatio: 1,
    backgroundColor: "grey",
    margin: 5,
  },
});

export default () => {
  return (
    <View style={styles.card}>
      <Text></Text>
    </View>
  );
};
