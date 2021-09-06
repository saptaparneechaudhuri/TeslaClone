import React from "react";
import {
  View,
  
  StyleSheet,
  
  FlatList,
  Dimensions,
} from "react-native";
import CarItem from "../components/carItem";
import cars from "../data/cars";
import Header from "../components/header";

const { height } = Dimensions.get("window").height;

const CarsScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <CarItem
        name={item.name}
        tagline={item.tagline}
        taglineCTA={item.taglineCTA}
        image={item.image}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    // <CarItem
    //   name="Model X"
    //   tagline="Order Online For"
    //   taglineCTA="Touchless Delivery"
    //   image={require("../../assets/images/Model3.jpeg")}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CarsScreen;
