import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { TabView, SceneMap } from "react-native-tab-view";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Text } from "react-native";
import { COLORS_APP } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class TabHeader extends Component {
  state = {
    index: 0
  };
  getTabs() {
    return Object.keys(this.props.products).map((productKey, index) => {
      const borderOpacity = this.state.index == index ? 1 : 0;
      return (
        <View
          style={{
            backgroundColor: COLORS_APP.PRIMARY_COLOR,
            borderBottomColor: `rgba(252, 136, 3, ${borderOpacity})`,
            borderBottomWidth: 5,
            flexWrap: "nowrap"
          }}
          key={productKey}
        >
          <Button
            title={productKey.toUpperCase()}
            type="clear"
            buttonStyle={{
              height: hp("6%")
            }}
            onPress={() => this.setState({ index })}
          />
        </View>
      );
    });
  }
  render() {
    console.log(this.props.products);

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>{this.getTabs()}</View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ products, cart }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(TabHeader);
