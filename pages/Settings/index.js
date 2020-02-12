import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";

class Settings extends Component {
  render() {
    return (
      <ListItem
        title="Caisse"
        chevron
        onPress={() => this.props.navigation.push("CaisseSettings")}
      />
    );
  }
}

export default withNavigation(Settings);
