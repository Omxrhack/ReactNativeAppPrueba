import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import HeaderSaludo from "./HeaderSaludo";
const Main = () => {
  {
    return (
      <View style={styles.Container}>
        <View style={styles.top}>
          <HeaderSaludo />
        </View>
        <View style={styles.main}>
          <Button title="hola" />
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.bottom}>hola</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  top: {
    alignItems: "flex-start",
    padding: 25,
  },
  containerBottom: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
    padding: 20,
  },
  bottom: {
    alignSelf: "center",
    flex: 1,
    color: "#000",
  },
});

export default Main;
