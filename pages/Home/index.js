import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import Header from "../../components/header";
import { COLORS_APP } from "../../styles/colors";
import TabHeader from "../../components/tabs";
import { resetProduct } from "../../actions";
import { connect } from "react-redux";
import { startCaisse } from "../../actions";

class Home extends Component {
  static navigationOptions = {
    headerRight: () => <Header.RightHomeHeader />,
    headerTitle: () => <Header.TotalHeader />,
    headerStyle: {
      backgroundColor: COLORS_APP.PRIMARY_COLOR
    }
  };

  componentDidUpdate() {}

  render() {
    return (
      <View>
        <TabHeader />
      </View>
    );
  }
}

export default Home;
