import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { incomeType } from "@/types";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/FontAwesome";
import Icons2 from "react-native-vector-icons/FontAwesome6";


const IncomeBlock = ({ incomelist }: { incomelist: incomeType[] }) => {
  const renderItem: ListRenderItem<incomeType> = ({ item, index }) => {
    let icon = <Icons name="dollar" size={15} color={Colors.white} />;
    if (item.name == "Salary") {
      icon = <Icon name="wallet" size={20} color={Colors.white} />;
    } else if (item.name == "Investments") {
      icon = <Icons2 name="money-bill-trend-up" size={20} color={Colors.white} />
    } else if (item.name == "Freelance") {
      icon = <Icons name="money" size={20} color={Colors.white} />;
    } else if (item.name == "Interest") {
      icon = <Icon2 name="finance" size={20} color={Colors.white} />;
    }
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
            }}
          >
            {icon}
          </View>
          <TouchableOpacity>
            <Icon name="dots-three-horizontal" size={15} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.white, fontSize: 15 }}>{item.name}</Text>
        <Text style={{ color: Colors.white, fontSize: 10, fontWeight: 400 }}>
          <Text style={{ fontSize: 14, fontWeight: 700 }}>₹{item.income}.</Text>
          00
        </Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 15, marginVertical: 10 }}>
        My <Text style={{ fontWeight: "bold" }}>Income</Text>
      </Text>
      <FlatList
        data={incomelist}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.grey,
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    marginRight: 10,
    justifyContent: "center",
    width: 150,
    gap: 8,
  },
});
