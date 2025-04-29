import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Headers from "@/components/Headers";
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from "@/components/ExpenseBlock";
import ExpenseList from "@/data/expense.json";
import IncomeBlock from "@/components/IncomeBlock";
import IncomeList from "@/data/income.json";
import SpendingBlock from "@/components/SpendingBlock";
import SpendingList from "@/data/spendings.json";

const pieData = [
  {
    value: 26.67,
    color: Colors.tintColor,
    focused: true,
  },
  { value: 3.342, color: "#F5A623" },
  { value: 11.12, color: "#0F4C81" },
  { value: 6.67, color: "#D5006D" },
  { value: 17.78, color: "#8BC34A" },
  { value: 7.79, color: "#D1C4E9" },
  { value: 26.66, color: "#93FCF8" },
];

const profile = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Headers />,
          headerStyle: { backgroundColor: Colors.black },
        }}
      />
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 15 }}>
                My <Text style={{ fontWeight: "bold" }}>Expenses</Text>
              </Text>
              <Text
                style={{ color: Colors.white, fontSize: 22, fontWeight: 400 }}
              >
                <Text style={{ fontSize: 40, fontWeight: 700 }}>₹4502.</Text>64
              </Text>
            </View>
            <View style={{ padding: 20, alignItems: "center" }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                focusOnPress
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        April
                      </Text>
                      {/* <Text style={{fontSize: 14, color: 'white'}}>Excellent</Text> */}
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock expensList={ExpenseList} />

          <IncomeBlock incomelist={IncomeList} />

          <SpendingBlock spendinglist={SpendingList} />
        </ScrollView>
      </View>
    </>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
