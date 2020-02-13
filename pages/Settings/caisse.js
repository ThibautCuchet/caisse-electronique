import React, { Component, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ListItem, Overlay, Button, Divider } from "react-native-elements";
import { connect } from "react-redux";
import { COLORS_APP } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";

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
      </View>
    );
  }
}

const DefaultHeader = ({ isVisible, handleClose, title, children }) => {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={handleClose()}
      overlayStyle={{ padding: 0 }}
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
          {title}
        </Text>
      </View>
      {children}
    </Overlay>
  );
};

const Categorie = props => {
  const category = Object.keys(sprops.products);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View>
          {category ? (
            category.map(type => (
              <ListItem
                title={type}
                key={type}
                chevron
                bottomDivider
                onPress={() =>
                  props.navigation.push("ProductSettings", { type })
                }
              />
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
    </View>
  );
};

const Product = props => {
  const products = Object.keys(props.products[props.route.type]);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map(product => (
          <ListItem key={product} name={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default withNavigation(connect(mapStateToProps)(Caisse));
