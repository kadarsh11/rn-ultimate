import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={st.root}>
      
      <Text style={st.text}>ΔĐΔŘŞĦ ỮŁŦƗΜΔŦ€ ΔƤƤ </Text>
      {/* <Text style={st.text}>ADARSH ULTIMATE APP</Text> */}
      
    </SafeAreaView>
  );
}


const st = StyleSheet.create({
    root: {
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },
    logo: {
      width: 120,
      height: 120,
      marginBottom: 20,
    },
    text: {
      fontSize: 28,
      fontWeight: "600",
    },
  });
  