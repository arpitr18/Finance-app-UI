import { View, Text, FlatList, StyleSheet, ListRenderItem } from "react-native";
import React from "react";
import { SpendingsType } from "@/types";
import Colors from "@/constants/Colors";
import Icon from "react-native-vector-icons/Feather";
import {
  DollarIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
  UberIcon,
  AmazonIcon,
  AirbnbIcon,
  DollarSignIcon,
  FigmaIcon,
  ShoopingCartIcon,
  SpotifyIcon,
  NetflixIcon,
  Youtube,
} from "@/constants/Icons";

const SpendingBlock = ({ spendinglist }: { spendinglist: SpendingsType[] }) => {
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 15, marginVertical: 10 }}>
        April <Text style={{ fontWeight: 700 }}>Spendings</Text>
      </Text>
      {spendinglist.map((item) => {
        let amount = String(item.amount).split(".");
        let icon = <Icon name="user" size={30} color={Colors.white} />;

        if (item.name == "Netflix") {
          icon = <NetflixIcon width={30} height={30} color='#E50914' />;
        } else if (item.name == "Amazon Prime") {
          icon = <AmazonIcon width={30} height={30} color='#1399FF' />;
        } else if (item.name == "Spotify Premium") {
          icon = <SpotifyIcon width={30} height={30} color='#1ecb6a' />;
        }else if (item.name == "Uber") {
          icon = <UberIcon width={30} height={30} color={Colors.white} />;
        }else if (item.name == "Figma") {
          icon = <FigmaIcon width={30} height={30} color="#ff7262" />;
        }else if (item.name == "Dmart") {
          icon = <ShoopingCartIcon width={30} height={30} color='#206B33' />;
        }else if (item.name == "Metro Travel Pass") {
          icon = <WalletCardIcon width={30} height={30} color='#1e9be2' />;
        }else if (item.name == "AirBnb") {
          icon = <AirbnbIcon width={30} height={30} color='red' />;
        }else if (item.name == "YouTube Premium") {
          icon = <Youtube width={30} height={30} color={Colors.white} />;
        }

        return (
          <View style={styles.container} key={item.id}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon}
              <View>
                <Text
                  style={{ color: Colors.white, fontSize: 18, fontWeight: 500 }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 12,
                    paddingVertical: 5,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
            <Text style={styles.text}>
              ₹{amount[0]}.<Text style={styles.textdecimal}>{amount[1]}</Text>
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // padding: 10,
    // borderRadius: 15,
    marginVertical: 5,
    // marginRight: 10,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
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
});
