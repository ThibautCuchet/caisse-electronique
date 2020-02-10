import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const style = StyleSheet.create({});

export const clearButtonProperty = {
  type: "clear",
  containerStyle: { width: wp("20%") },
  titleStyle: { color: "white" }
};
