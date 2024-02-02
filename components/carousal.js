import {
     StyleSheet,
     Text,
     View,
     FlatList,
     Dimensions,
     Image,
   } from 'react-native';
   import React from 'react';
   const { height, width } = Dimensions.get('window');
   
   const Carousal = () => {
     const images = [
       {
         id: 1,
         image:
           'https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=',
       },
       {
         id: 2,
         image:
           'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800',
       },
     ];
     return (
       <FlatList
         pagingEnabled
         horizontal
         data={images}
         showsHorizontalScrollIndicator={false}
         renderItem={({ item,index }) => (
           <View style={styles.carousal} key={index}>
             <Image source={{ uri: item.image }} style={styles.img} />
           </View>
         )}
         keyExtractor={(item) => item.id}
       />
     );
   };
   
   export default Carousal;
   
   const styles = StyleSheet.create({
     carousal: {
       alignItems: 'center',
       justifyContent: 'center',
       width: width,
       height: height / 3,
     },
     img: {
       height: '90%',
       width: '90%',
       borderRadius: 7,
     },
   });
   