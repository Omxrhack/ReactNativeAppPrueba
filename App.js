import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aveces la vida te deja destrozado</Text>
      <Text style={styles.subtitle}>Pero la vida no me controla.</Text>

      <View style={styles.containerBottom}>
        <Button
          title="CLICK ME"
          style={styles.buttonStyle}
          onPress={() => alert("Hello, world!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  containerBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 1,
    overflow: "hidden",
  },
});
