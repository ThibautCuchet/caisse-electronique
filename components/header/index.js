import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, colors } from "react-native-elements";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { resetProduct } from "../../actions";
import { withNavigation } from "react-navigation";

export const DefaultHeader = () => {};

class RightHomeHeader extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Clear"
          type="clear"
          containerStyle={{ width: wp("20%") }}
          titleStyle={{ color: "white" }}
          onPress={() => this.props.resetProduct()}
        />
        <Button
          title="Pay"
          type="clear"
          containerStyle={{ width: wp("20%") }}
          titleStyle={{ color: "white" }}
          onPress={() => this.props.navigation.push("Pay")}
        />
      </View>
    );
  }
}

class TotalHeader extends Component {
  render() {
    return (
      <Text style={{ color: "white", fontSize: 18 }}>
        {this.props.total.toFixed(2)}€
      </Text>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.cart.total
  };
};

const mapDispatchToProps = {
  resetProduct
};

export default {
  TotalHeader: connect(mapStateToProps)(TotalHeader),
  RightHomeHeader: withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(RightHomeHeader)
  )
};
