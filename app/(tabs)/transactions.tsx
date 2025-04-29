import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.white }}>Transactions </Text>
    </View>
  );
};

export default transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
