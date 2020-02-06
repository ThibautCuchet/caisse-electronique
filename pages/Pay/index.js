import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native";
import { List, ListItem } from "react-native-elements";

class Pay extends Component {
  getPayProducts() {
    return Object.keys(this.props.products).map(type => {
      const products = Object.keys(this.props.products[type])
        .filter(product => this.props.products[type][product].count > 0)
        .map(product => {
          return <Text>{this.props.products[type][product].name}</Text>;
        });
      console.log(products, products.length);

      if (products.length > 0)
        return (
          <View>
            <Text>{type}</Text>
            {products}
          </View>
        );
    });
  }

  render() {
    return <View>{this.getPayProducts()}</View>;
  }
}

const mapStatusToProps = ({ products }) => {
  return { products };
};

export default connect(mapStatusToProps)(Pay);
