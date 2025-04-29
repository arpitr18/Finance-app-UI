import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Headers = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        <View style={styles.infoWrapper}>
        <Image
          source={require("../assets/images/me.jpg")}
          style={styles.image}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: Colors.white, fontSize: 15}}>
            Hii, Arpit
          </Text>
          <Text style={{color: Colors.white, fontSize: 20}}>
            Your <Text style={{fontWeight:700}}>Budget</Text>
          </Text>
        </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.textStyle}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.black,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  infoWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  textStyle: {
    color: Colors.white,
    fontSize: 15,
    borderColor: '#666',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default Headers;
