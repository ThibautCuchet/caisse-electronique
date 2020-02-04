import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, colors } from "react-native-elements";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { render } from "react-dom";

export const DefaultHeader = () => {};

export const RightHomeHeader = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Button
        title="Clear"
        type="clear"
        containerStyle={{ width: wp("20%") }}
        titleStyle={{ color: "white" }}
      />
      <Button
        title="Pay"
        type="clear"
        containerStyle={{ width: wp("20%") }}
        titleStyle={{ color: "white" }}
      />
    </View>
  );
};

class TotalHeader extends Component {
  render() {
    return (
      <Text style={{ color: "white", fontSize: 18 }}>
        {" "}
        {this.props.total}€{" "}
      </Text>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.cart.total
  };
};

export default connect(mapStateToProps)(TotalHeader);
