import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { BottomButton } from "../components";

const PickupScreen = () => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedDateStr, setSelectedDateStr] = useState([]);

  
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState([]);

  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
      deliveryCost:2,

    },
    {
      id: "1",
      name: "3-4 Days",
      deliveryCost:2,

    },
    {
      id: "2",
      name: "4-5 Days",
      deliveryCost:1,

    },
    {
      id: "3",
      name: "5-6 Days",
      deliveryCost:0,

    },
    {
      id: "4",
      name: "Tommorrow",
      deliveryCost:4,
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    let newDate = today.setDate(today.getDate() + 1);
    dates.push(new Date(newDate));
  }
  

  const navigation = useNavigation();
  const proceedToCart = () => {
    console.log(selectedDate);
    console.log(selectedTime);
    console.log(delivery);
    if (selectedDate.length===0 || selectedTime.length===0 || delivery.length===0) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
   else if (selectedDate && selectedTime && delivery) {
    
    
      navigation.replace("Cart", {
        pickUpDate: selectedDateStr,
        selectedTime: selectedTime,
        no_Of_days: delivery,
        deliveryCharges:deliveryCost,
        totalCost:total,
      



      });
    }
  };
  return (
    <SafeAreaView style={{ height:Dimensions.get('screen').height*0.95 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        enter Address
      </Text>
      <TextInput
        style={{
          padding: 40,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 80,
          borderRadius: 9,
          margin: 10,
        }}
      />

      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Pick Up Date
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:20}}>
        {dates.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setSelectedDate(item.getDate());
              setSelectedDateStr(item.getDate() +
              " " + item.toLocaleString("default", { month: "long" }))
              console.log(selectedDateStr);
              // console.log(selectedDate);
            }}
            style={
              selectedDate === item.getDate()
                ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                    height: 50,
                    width: 140,
                    color: "white",
                    backgroundColor: "red",
                    
                  }
                : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "gray",
                    borderWidth: 0.7,
                    height: 50,
                  }
            }
          >
            {selectedDate === item.getDate() ? (
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                {item.getDate() +
                  " " +
                  item.toLocaleString("default", { month: "long" })}
              </Text>
            ) : (
              <Text>
                {item.getDate() +
                  " " +
                  item.toLocaleString("default", { month: "short" })}
              </Text>
            )}
          </Pressable>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Select Time
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:20}}>
        {times.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedTime(item.time)}
            style={
              selectedTime.includes(item.time)
                ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                    height: 50,
                  }
                : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "gray",
                    borderWidth: 0.7,
                    height: 50,
                  }
            }
          >
            <Text>{item.time}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Delivery Date
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:120}}>
        {deliveryTime.map((item, i) => (
          <Pressable
            style={
              delivery.includes(item.name)
                ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                    height: 50,
                  }
                : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "gray",
                    borderWidth: 0.7,
                    height: 50,
                  }
            }
            onPress={() =>{ setDelivery(item.name)
            setDeliveryCost(item.deliveryCost)}}
            key={i}
          >
            <Text>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <BottomButton
        price={total}
        itemCount={cart.length}
        onPress={() =>proceedToCart()}
        buttonData="Proceed to cart"
      />
    </SafeAreaView>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({});
