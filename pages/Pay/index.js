import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text, ScrollView } from "react-native";
import {
  List,
  ListItem,
  Divider,
  Input,
  Overlay,
  Button
} from "react-native-elements";
import { resetProduct, applyReduction, removeReduction } from "../../actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { COLORS_APP } from "../../styles/colors";
import Header from "../../components/header";

class Pay extends Component {
  static navigationOptions = {
    headerRight: () => <Header.RightPayHeader />,
    headerStyle: {
      backgroundColor: COLORS_APP.PRIMARY_COLOR
    },
    headerTintColor: "white"
  };

  state = {
    reductionVisibility: false
  };

  getPayProducts() {
    return Object.keys(this.props.products).map(type => {
      const products = Object.keys(this.props.products[type])
        .filter(product => this.props.products[type][product].count > 0)
        .map(product => {
          const productItem = this.props.products[type][product];
          return (
            <View key={product}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text>{productItem.name}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {productItem.price}: x{productItem.count}
                  </Text>
                </View>
                <Text>
                  {(productItem.price * productItem.count).toFixed(1)}€
                </Text>
              </View>
              <Divider />
            </View>
          );
        });

      if (products.length > 0)
        return (
          <View style={{ margin: 10 }} key={type}>
            <Text>{type.toUpperCase()}</Text>
            <Divider />
            {products}
          </View>
        );
    });
  }

  applyReduction(reduction) {
    this.props.applyReduction(reduction);
    this.setState({ reductionVisibility: false });
  }

  cancelReduction() {
    this.props.removeReduction();
    this.setState({ reductionVisibility: false });
  }

  render() {
    const { cart } = this.props;
    return (
      <View>
        <Overlay
          isVisible={this.state.reductionVisibility}
          onBackdropPress={() => this.setState({ reductionVisibility: false })}
        >
          <Text style={{ fontSize: 16, margin: 10 }}>
            Choisissez une réduction
          </Text>
          <Divider />
          <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {cart.reduction &&
                Object.keys(cart.reduction).map(reduction => (
                  <ListItem
                    key={reduction}
                    title={cart.reduction[reduction].name}
                    subtitle={` ${cart.reduction[reduction].percent * 100}% `}
                    bottomDivider
                    chevron
                    onPress={() =>
                      this.applyReduction(cart.reduction[reduction])
                    }
                  />
                ))}
            </ScrollView>
          </View>
          <Button
            title="Annuler"
            type="clear"
            onPress={() => this.cancelReduction()}
          />
        </Overlay>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.getPayProducts()}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10
            }}
          >
            <Text>Total</Text>
            <Text>{cart.total.toFixed(1)}€</Text>
          </View>
          <Divider />
          {cart.activeReduction && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 10
                }}
              >
                <View>
                  <Text>Reduction : {cart.activeReduction.name}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {cart.activeReduction.percent * 100}%
                  </Text>
                </View>
                <Text>
                  - {(cart.total * cart.activeReduction.percent).toFixed(1)}€
                </Text>
              </View>
              <Divider />
            </View>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10
            }}
          >
            {cart.reduction && (
              <Button
                title="Réductions"
                onPress={() => this.setState({ reductionVisibility: true })}
                buttonStyle={{
                  backgroundColor: COLORS_APP.PRIMARY_COLOR_ACCENT
                }}
              />
            )}
            <View style={{ flexDirection: "row", marginBottom: 25 }}>
              <Text style={{ fontSize: 16 }}>A payer : </Text>
              <Text style={{ fontSize: 16 }}>
                {(cart.activeReduction
                  ? (1 - cart.activeReduction.percent) * cart.total
                  : cart.total
                ).toFixed(1)}
                €
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatusToProps = ({ products, cart }) => {
  return { products, cart };
};

const mapDispatchToProps = {
  resetProduct,
  applyReduction,
  removeReduction
};

export default connect(mapStatusToProps, mapDispatchToProps)(Pay);
