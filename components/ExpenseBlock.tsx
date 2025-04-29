import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import Icons from "react-native-vector-icons/FontAwesome";

const ExpenseBlock = ({ expensList }: { expensList: ExpenseType[]}) => {
  const renderItem: ListRenderItem<ExpenseType> = ({ item, index }) => {
    let amount = String(item.amount).split(".");
    if (index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={styles.addItemBtn}
          >
            <Icons name="plus" size={25} color={Colors.white} />
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              item.category == "Groceries"
                ? Colors.tintColor
                : item.category == "Transport"
                ? "#F5A623"
                : item.category == "Dining"
                ? "#0F4C81"
                : item.category == "Recharge"
                ? "#D5006D"
                : item.category == "Entertainment"
                ? "#8BC34A"
                : item.category == "Medical"
                ? "#D1C4E9"
                : Colors.blue,
          },
        ]}
      >
        <Text
          style={[
            styles.textbg,
            {
              color:
                item.category == "Utilities"
                  ? Colors.black
                  : item.category == "Entertainment"
                  ? Colors.black
                  : item.category == "Medical"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.category}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color:
                item.category == "Utilities"
                  ? Colors.black
                  : item.category == "Entertainment"
                  ? Colors.black
                  : item.category == "Medical"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          ₹{amount[0]}.
          <Text
            style={[
              styles.textdecimal,
              {
                color:
                  item.category == "Utilities"
                    ? Colors.black
                    : item.category == "Entertainment"
                    ? Colors.black
                    : item.category == "Medical"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {amount[1]}
          </Text>
        </Text>
        <View style={styles.bg}>
          <Text
            style={[
              styles.textbg2,
              {
                color:
                  item.category == "Utilities"
                    ? Colors.black
                    : item.category == "Entertainment"
                    ? Colors.black
                    : item.category == "Medical"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.payment_method}
          </Text>
        </View>
      </View>
    );
  };

  const addItem = [{ id: 0, name: "Add" }];

  return (
    <View>
      <FlatList
        data={addItem.concat(expensList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    marginRight: 10,
    gap: 8,
    width: 100,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 700,
  },
  textdecimal: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 400,
  },
  textbg: {
    fontSize: 16,
    fontWeight: 600,
  },
  textbg2: { fontSize: 12 },
  bg: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  addItemBtn:{
    flex: 1,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
  }
});
