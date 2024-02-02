import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DeliveryInfo = ({ field, data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.7,
        borderBottomColor: "#899455",
        height: 50,
        padding: 16,
        alignItems:"center",
      }}
    >
      <Text style={{ fontWeight: "500", textAlign: "left", color: "#899499" }}>
        {field}
      </Text>
      <Text style={{ color: "#899499" }}>{data}</Text>
    </View>
  );
};

export default DeliveryInfo;

const styles = StyleSheet.create({});
