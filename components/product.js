import {
  StyleSheet,
  Text,
  View,
  Card,
  Image,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/cartSlice";
import AddSub from "./AddSub";
import { incrementQty } from "../Redux/productSlice";
const width = Dimensions.get("window").width;
export default Product = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  //
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.image }} style={styles.img} />
      <View style={{ justifyContent: "center", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: 600 }}>{data.name}</Text>
        <Text>{"$" + data.price}</Text>
      </View>
      {cart.some((c) => c.id === data.id) ? (
        <AddSub item={data}/>
      ) : (
        <Button
          style={{ padding: 10 }}
          title="Add Item"
          onPress={() => {
            dispatch(addToCart(data))
            dispatch(incrementQty(data))
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 7,
    justifyContent: "space-around",
    alignItems: "center",
    width: width,
    height: 150,
    margin: 8,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    alignSelf: "center",
  },
  img: {
    height: "90%",
    width: "30%",
  },
});
