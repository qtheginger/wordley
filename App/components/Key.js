import React from "react";
import { Pressable, Alert, Text, StyleSheet } from "react-native";

import keyName from "../data/KeyName.json";

const styles = StyleSheet.create({
  key: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    height: "80%",
    width: 20,
    //  alignContent: "center",
  },
  keyText: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default (props) => {
  console.log(props.index);
  return (
    <Pressable
      key={props.index}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "red" : "blue",
        },
        styles.key,
      ]}
      onPress={() => Alert.alert("button pressed")}
    >
      <Text style={styles.keyText}>{keyName[props.index]}</Text>
    </Pressable>
  );
};
