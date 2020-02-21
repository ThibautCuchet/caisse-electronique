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

class Category extends Component {

  getCategory = () => {
    return Object.keys(this.props.products);
  };

  render() {
    const { products } = this.props;
    const category = this.getCategory();
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
                    props.navigation.push("Product", { type })
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
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default withNavigation(connect(mapStateToProps)(Category));
