import { TextInput, View } from "react-native";
export const CustomTextField = ({ placeholder }) => {
  return (
    <TextInput
      style={{
        backgroundColor: "#fff",
        borderRadius: 3,
        height: 20,
        justifyContent: "center",
        padding: 3,
        width: "90%",
      }}
      placeholder={placeholder}
    />
  );
};
