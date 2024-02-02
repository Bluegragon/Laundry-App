import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BottomButton,
  Carousal,
  Navbar,
  Product,
  Searchbar,
  Servicelist,
} from "../components";
import { services } from "../data/services";
import { data } from "../data/data";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/productSlice";
import { useNavigation } from "@react-navigation/native";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
const Homescreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Location is loading"
  );
  let price = 0;
  let itemCount = 0;
  cart.map((item) => {
    price += item.price * item.quantity;
    itemCount += item.quantity;
  });
  console.log(price);
  const [isLocationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [item, setItem] = useState([])
  async function checkLocationEnabled() {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location sevice Not Enabled",
        "Pls Enable Location Service",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  }
  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Pls grant permission for location ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      const { coords } = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = coords;
      let res = await Location.reverseGeocodeAsync({ latitude, longitude });
      setDisplayCurrentAddress(
        `${res[0].postalCode} ${res[0].city} ,${res[0].country}`
      );
    }
  }
  useEffect(() => {
    checkLocationEnabled();
    getCurrentLocation();

    console.log("err");
  }, []);
  const products = useSelector((state) => state.product.product);
  useEffect(() => {
    if (products.length > 0) return;
    const fetchProduct = async() => {
      // data.map((service) => dispatch(getProducts(service)));
      const colRef=collection(db,'products');
      const docSnap=await getDocs(colRef);
      docSnap.forEach((docs)=>{
        item.push(docs.data());
      })
      console.log(item);
            item?.map((it)=>dispatch(getProducts(it)));
    };
    fetchProduct();
    setItem([]);
  }, [products]);
  const navigate = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <Navbar location={displayCurrentAddress} />
        <Searchbar />
        <Carousal />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {services.map((service) => {
            return <Servicelist service={service} key={service.id} />;
          })}
        </ScrollView>
        <ScrollView style={{padding:10}}>
        {products.map((item) => (
          <Product data={item} key={item.id} />
        ))}

        </ScrollView>

       
        {price?<View style={{height:100}}></View>:<></>}
      </ScrollView>
      {price ? (
        <BottomButton
          buttonData="Proceed to cart"
          price={price}
          itemCount={cart.length}
          onPress={() => navigate.navigate("Pickup")}
        />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Homescreen;
