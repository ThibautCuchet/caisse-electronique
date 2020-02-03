import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./pages/Home";

const App = createStackNavigation({
  Home: {
    screen: Home
  }
});

export default createAppContainer(App);
