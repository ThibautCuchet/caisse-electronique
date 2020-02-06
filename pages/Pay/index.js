import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native";
import { List, ListItem, Divider } from "react-native-elements";
import { resetProduct } from "../../actions";

class Pay extends Component {
  getPayProducts() {
    return Object.keys(this.props.products).map(type => {
      const products = Object.keys(this.props.products[type])
        .filter(product => this.props.products[type][product].count > 0)
        .map(product => {
          const productItem = this.props.products[type][product];
          return (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text>{productItem.name}</Text>
                <Text style={{ fontSize: 10 }}>
                  {productItem.price}: x{productItem.count}
                </Text>
              </View>
              <Text>= {productItem.price * productItem.count}€</Text>
            </View>
          );
        });
      console.log(products, products.length);

      if (products.length > 0)
        return (
          <View style={{ margin: 10 }}>
            <Text>{type.toUpperCase()}</Text>
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

const mapDispatchToProps = {
  resetProduct
};

export default connect(mapStatusToProps, mapDispatchToProps)(Pay);
