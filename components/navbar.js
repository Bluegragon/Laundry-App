import { StyleSheet, Text, View, Dimensions,Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Navbar = ({ location }) => {
  return (
    <View style={styles.nav}>
      <Entypo name="location-pin" size={35} color="#E32636" />
      <View>
        <Text style={styles.home}>Home</Text>
        <Text>{location}</Text>
      </View>
      <Image style={styles.img}
        source={{
          uri: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
        }}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  nav: {
    marginTop:20,
    height: 50,
    width: Dimensions.width,
    flexDirection: "row",
    margin:10
  },
  home: {
    fontWeight:'700',
  },
  img:{
     height:40,
     width:40,
     borderRadius:20,
     marginLeft:'auto',

  }
});
