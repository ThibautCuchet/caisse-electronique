import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import Pay from "./pages/Pay";

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

const Routes = createAppContainer(StackNavigation);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
