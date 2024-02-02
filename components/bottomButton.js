import { Dimensions, StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
const BottomButton = ({ buttonData, itemCount, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cartbtn}>
      <View>
        <Text style={styles.normalTxt}>
          {itemCount} items | {price}$
        </Text>
        <Text style={styles.normalTxt}>extra charges might apply</Text>
      </View>
      <Text style={styles.txt}>{buttonData}</Text>
    </Pressable>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  cartbtn: {
    height: 80,
    position: "absolute",
    bottom: 0,
    width: width * 0.9,
    backgroundColor: "#E32636",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
    borderRadius: 6,
    flexDirection: "row",
  },
  txt: {
    fontWeight: "600",
    color: "white",
    fontSize: 18,
  },
  normalTxt: {
    color: "white",
  },
});
