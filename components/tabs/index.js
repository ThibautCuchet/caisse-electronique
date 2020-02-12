import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { TabView, SceneMap } from "react-native-tab-view";
import { View, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import { Text } from "react-native";
import { COLORS_APP } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { increaseProduct, decreaseProduct, startCaisse } from "../../actions";

class TabHeader extends Component {
  state = {
    index: 0
  };

  handleIncremetProduct = product => {
    this.props.increaseProduct(product);
    this.props.startCaisse();
  };

  getTabs() {
    const products = this.props.products;
    return Object.keys(products).map((productKey, index) => {
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
            titleStyle={{ color: "white" }}
            onPress={() => this.setState({ index })}
          />
        </View>
      );
    });
  }
  getTabView() {
    const products = this.props.products;
    return Object.keys(products).map((productKey, index) => (
      <View
        key={productKey}
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start"
        }}
      >
        {this.state.index == index &&
          Object.keys(products[productKey]).map(productName => {
            const product = products[productKey][productName];
            return (
              <TouchableWithoutFeedback
                key={productName}
                onPress={() =>
                  this.handleIncremetProduct({
                    type: productKey,
                    name: productName,
                    price: product.price
                  })
                }
                onLongPress={() =>
                  this.decreaseProduct(product.count, {
                    type: productKey,
                    name: productName,
                    price: product.price
                  })
                }
              >
                <Card
                  title={
                    <Text style={{ fontSize: wp("3%") }} numberOfLines={2}>
                      {product.name}
                    </Text>
                  }
                  containerStyle={{
                    borderRadius: 5,
                    width: wp("22%"),
                    height: hp("13%"),
                    margin: 5
                  }}
                >
                  <Text>{product.price}€</Text>
                  <Text>x{product.count}</Text>
                </Card>
              </TouchableWithoutFeedback>
            );
          })}
      </View>
    ));
  }

  decreaseProduct(count, product) {
    if (count === 0) return;
    this.props.decreaseProduct(product);
  }

  getHomePage() {
    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: COLORS_APP.PRIMARY_COLOR }}
        >
          <View style={{ flexDirection: "row" }}>{this.getTabs()}</View>
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.getTabView()}
        </ScrollView>
      </View>
    );
  }

  render() {
    return this.props.products ? (
      this.getHomePage()
    ) : (
      <Text>Start by adding products in settings</Text>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

const mapDispatchToProps = {
  increaseProduct,
  decreaseProduct,
  startCaisse
};

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
