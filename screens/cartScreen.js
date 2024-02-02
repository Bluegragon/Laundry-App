import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomButton, PaymentOptions, Product } from "../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import DeliveryInfo from "../components/deliveryInfo";
import { cleanCart } from "../Redux/cartSlice";
import { cleanProduct } from "../Redux/productSlice";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/firebaseConfig";


const CartScreen = () => {
  const userUid = auth.currentUser.uid;
  const placeOrder=async()=>{
    await setDoc(
      doc(db, "users", `${userUid}`),
      {
        orders: { ...cart },
        pickUpDetails: routes.params,
      },
      {
        merge: true,
      }
    );
    console.log({...cart});
    dispatch(cleanCart());
    dispatch(cleanProduct());
    navigate.navigate("Orderplaced");
    
   }
   const dispatch=useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const routes = useRoute();
  const navigate = useNavigation();

  return (
    <SafeAreaView style={{height:Dimensions.get('screen').height*0.944}}>
      <ScrollView >
        {cart.map((item) => (
          <Product key={item.id} data={item} />
        ))}
        <View style={{ backgroundColor: "#fff", margin: 8 }}>
          <View>
            <DeliveryInfo field="Pickup Date" data={routes.params.pickUpDate} />
            <DeliveryInfo
              field="Time to be Delivered"
              data={routes.params.selectedTime}
            />
            <DeliveryInfo
              field="Delivery in days"
              data={routes.params.no_Of_days}
            />

            <DeliveryInfo
              field="Delivery Charges"
              data={routes.params.deliveryCharges + " $"}
            />
            <DeliveryInfo
              field="Total Charges"
              data={total + routes.params.deliveryCharges + " $"}
            />
          </View>
        </View>
      <PaymentOptions/>

        <View style={{height:100}}></View>

      </ScrollView>
      <BottomButton
        buttonData="Checkout"
        price={total + routes.params.deliveryCharges}
        itemCount={cart.length}
        onPress={placeOrder}
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
