import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import TotalHeader, { RightHomeHeader } from "../../components/header";
import { COLORS_APP } from "../../styles/colors";
import TabHeader from "../../components/tabs";

class Home extends Component {
  static navigationOptions = {
    headerRight: () => <RightHomeHeader />,
    headerTitle: () => <TotalHeader />,
    headerStyle: {
      backgroundColor: COLORS_APP.PRIMARY_COLOR
    }
  };

  render() {
    return (
      <View>
        <TabHeader />
      </View>
    );
  }
}

export default Home;
