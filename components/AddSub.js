import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, incrementQty } from '../Redux/productSlice';
import { decrementQuantity, incrementQuantity } from '../Redux/cartSlice';

const AddSub = ({item}) => {
     const cart=useSelector((state)=>state.cart.cart);
     const dispatch=useDispatch();
  return (
    <View style={styles.cont}>
<Pressable style={styles.btn} onPress={()=>{
     dispatch(incrementQuantity(item))
     dispatch(incrementQty(item))

}}><Text style={styles.btntxt}>+</Text></Pressable>
<Text > {item.quantity}</Text>
<Pressable style={styles.btn} onPress={()=>{
     dispatch(decrementQuantity(item))
     dispatch(decrementQty(item))
}}><Text style={styles.btntxt} >-</Text></Pressable>


      
    </View>
  )
}

export default AddSub

const styles = StyleSheet.create({
     btn:{
          height:30,
          width:40,
          borderRadius:15,
          backgroundColor: '#f2f2f2',
          justifyContent: 'center',
          alignItems: 'center',
     },
     cont:{
          gap:7,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems: 'center',
          
     },
     btntxt:{
          color:'#17B169',
          fontWeight:'600',
          fontSize:15
     }
})