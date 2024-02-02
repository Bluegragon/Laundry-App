import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  Text,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { userSignIn } from "../Firebase/FirebaseMethods";
import { useNavigation } from "@react-navigation/native";
import { login } from "../Firebase/FirebaseMethods";
import { auth } from "../Firebase/firebaseConfig";

const LogInForm = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoading(true);

        setTimeout(()=>{

          navigate.navigate("Home");
        },1000)
    
        
      }
    });
    return unsubscribe;
  }, []);

  const navigate = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", height: "100%" }}>
      {loading ? (
        <View style={{ flex: 1, flexDirection: "row", gap: 10,alignItems:"center",justifyContent:"center" }}>
          <ActivityIndicator color="red" size={70} />
        </View>
      ) : (
        <>
          <Image
            style={{ height: 400, width: 400, alignSelf: "center" }}
            source={require("../assets/icon.png")}
          />

          <View style={styles.container}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              mode="outlined"
              style={styles.input}
              theme={{
                colors: { primary: "#E32636", underlineColor: "transparent" },
              }}
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              mode="outlined"
              style={styles.input}
              theme={{
                colors: { primary: "#E32636", underlineColor: "transparent" },
              }}
            />
            <Button
              mode="contained"
              onPress={() => login(email, password)}
              style={styles.button}
            >
              Log In
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#E32636",
  },
});

export default LogInForm;
