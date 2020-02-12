import React, { Component, useState } from "react";
import { View, Text } from "react-native";
import { ListItem, Overlay } from "react-native-elements";

class CaisseSettings extends Component {
  state = {
    categoryVisibility: false,
    productVisibility: false,
    reductionVisibility: false
  };

  handleClose = () => {
    this.setState({
      categoryVisibility: false,
      productVisibility: false,
      reductionVisibility: false
    });
  };

  render() {
    return (
      <View>
        <ListItem
          title="Categorie"
          chevron
          onPress={() => this.setState({ categoryVisibility: true })}
        />
        <ListItem title="Produits" chevron />
        <ListItem title="Reduction" chevron />
        <Categorie
          isVisible={this.state.categoryVisibility}
          handleClose={this.handleClose}
        />
      </View>
    );
  }
}

const Categorie = ({ isVisible, handleClose }) => {
  return (
    <View>
      <Overlay isVisible={isVisible} onBackdropPress={() => handleClose()}>
        <Text>Categorie</Text>
      </Overlay>
    </View>
  );
};

export default CaisseSettings;
