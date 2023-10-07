import React from "react";

const HeaderSaludo = () => {
  function saludo() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "";
    if (currentHour < 12) {
      greeting = "Buenos días";
    } else if (currentHour < 18) {
      greeting = "Buenas tardes";
    } else {
      greeting = "Buenas noches";
    }
    return greeting;
  }
  return <Text style={styles.text}>{saludo()}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default HeaderSaludo;
