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

const clear = {
  type: "clear",
  containerStyle: { width: wp("20%") },
  titleStyle: { color: "white" }
};

class RightPayHeader extends Component {
  payed() {
    this.props.resetProduct();
    this.props.navigation.goBack();
  }

  render() {
    return <Button title="Paid" onPress={() => this.payed()} {...clear} />;
  }
}

class RightHomeHeader extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Clear"
          onPress={() => this.props.resetProduct()}
          {...clear}
        />
        <Button
          title="Pay"
          onPress={() => this.props.navigation.push("Pay")}
          {...clear}
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
  ),
  RightPayHeader: withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(RightPayHeader)
  )
};
