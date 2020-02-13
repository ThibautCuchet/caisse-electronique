import React, { Component, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ListItem, Overlay, Button, Divider } from "react-native-elements";
import { connect } from "react-redux";
import { COLORS_APP } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

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

  getCategory = () => {
    return Object.keys(this.props.products);
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
          category={this.getCategory()}
        />
      </View>
    );
  }
}

const Categorie = ({ isVisible, handleClose, category }) => {
  return (
    <View>
      <Overlay
        isVisible={isVisible}
        overlayStyle={{ padding: 0 }}
        onBackdropPress={() => handleClose()}
      >
        <View
          style={{
            backgroundColor: COLORS_APP.PRIMARY_COLOR,
            padding: 0,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            height: 65,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowOpacity: 0.8,
            shadowOffset: 2
          }}
        >
          <Text
            style={{
              margin: 10,
              fontSize: 18,
              color: "white"
            }}
          >
            Vos catégorie
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 5, flex: 1 }}
        >
          <View>
            {category ? (
              category.map(type => (
                <View key={type}>
                  <ListItem title={type} bottomDivider />
                </View>
              ))
            ) : (
              <Text>Vous n'avez pas encore de catégorie !</Text>
            )}
          </View>
        </ScrollView>
        <View style={{ margin: 10 }}>
          <Button
            title="Ajouter"
            buttonStyle={{
              borderRadius: 25,
              backgroundColor: COLORS_APP.PRIMARY_COLOR_ACCENT
            }}
          />
          <Button title="Annuler" type="clear" onPress={() => handleClose()} />
        </View>
      </Overlay>
    </View>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(CaisseSettings);
