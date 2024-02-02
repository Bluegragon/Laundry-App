import { View, Text } from "react-native";
import { CustomTextField } from "./customInput";
import { AntDesign } from "@expo/vector-icons";
export default Searchbar = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        borderWidth: 0.8,
        borderColor: "#C0C0C0",
        height: 40,
        justifyContent: "space-between",
        borderRadius: 6,
        alignItems: "center",
        padding: 5,
        marginHorizontal:15
        
      }}
    >
      <CustomTextField placeholder={"searchbar"} />

      <AntDesign name="search1" size={20} color="#E32636" />
    </View>
  );
};
