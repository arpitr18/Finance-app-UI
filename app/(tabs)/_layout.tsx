import { StyleSheet, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Icons from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tintColor,
        tabBarStyle: {
          backgroundColor: Colors.grey,
          position: "absolute",
          bottom: 20, 
          justifyContent: "center",
          alignItems: "center", 
          height: 60, 
          borderRadius: 40, 
          marginHorizontal: 60, 
          paddingTop: 8, 
          borderWidth: 1, 
          borderTopWidth: 1, 
          
        },
        tabBarShowLabel: false, 
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View>
              <AntDesign name="user" size={30} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View>
              <AntDesign name="home" size={30} color={color} />
            </View>
          ),
        }}
      />
            <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Icons name="dollar" size={30} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
