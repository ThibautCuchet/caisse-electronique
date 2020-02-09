import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import Pay from "./pages/Pay";
import Settings from "./pages/Settings";

const StackNavigation = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Pay: {
      screen: Pay
    }
  },
  {
    initialRouteName: "Home"
  }
);

const Drawer = createDrawerNavigator({
  Caisse: {
    screen: StackNavigation
  },
  Settings: {
    screen: Settings
  }
});

const Routes = createAppContainer(Drawer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
