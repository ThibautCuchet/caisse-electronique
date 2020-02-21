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
import { clearButtonProperty } from "./style";

export const DefaultHeader = () => {};

class RightPayHeader extends Component {
  handlePaid() {
    this.props.resetProduct();
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Button
        title="Paid"
        onPress={() => this.handlePaid()}
        icon={{ name: "done", color: "white" }}
        iconRight
        {...clearButtonProperty}
      />
    );
  }
}

class RightHomeHeader extends Component {
  handleReset = () => {
    this.props.resetProduct();
  };

  handlePay = () => {
    this.props.navigation.push("Pay");
  };

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Clear"
          onPress={() => this.handleReset()}
          {...clearButtonProperty}
        />
        <Button
          title="Pay"
          onPress={() => this.handlePay()}
          {...clearButtonProperty}
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

const mapStateToProps = ({ cart, products }) => {
  return {
    total: cart.total,
    products
  };
};

const mapDispatchToProps = {
  resetProduct
};

export default {
  TotalHeader: connect(mapStateToProps)(TotalHeader),
  RightHomeHeader: withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(RightHomeHeader)
  ),
  RightPayHeader: withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(RightPayHeader)
  )
};
