import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import StyleButton from "./styleButton";

const CarItem = ({ name, tagline, image, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroudImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyleButton type="primary" content="Custom Order" onPress={() => {}} />
        <StyleButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  backgroudImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
});

export default CarItem;
