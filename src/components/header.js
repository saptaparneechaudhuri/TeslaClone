import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    // justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
});

export default Header;
