import { StyleSheet, Text, Pressable,Image } from 'react-native'
import React from 'react'

const Servicelist = ({service}) => {
  return (
    <Pressable style={styles.serviceCont}>
      <Image source={{uri:service.image}} style={{width:70,
    height:70}}/>
      <Text style={{textAlign:'center'}}>{service.name}</Text>
    </Pressable>
  )
}

export default Servicelist

const styles = StyleSheet.create({
  serviceCont:{
    alignContent:'center',
    justifyContent:'center',
    padding:15,
    borderRadius:5,
    backgroundColor:'#fafafa',
    margin:5,
    height:120,
    width:110
    

  },
})