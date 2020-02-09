import React, { Component } from "react";
import { createAppContainer, withNavigation } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import Pay from "./pages/Pay";
import Settings from "./pages/Settings";
import { COLORS_APP } from "./styles/colors";
import { Button, Icon } from "react-native-elements";

const CaisseNavigation = createStackNavigator(
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

const SettingsNavigation = createStackNavigator({
  Home: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: COLORS_APP.PRIMARY_COLOR
      },
      headerTintColor: "white",
      headerLeft: () => (
        <Button
          type="clear"
          icon={
            <Icon
              name="menu"
              type="material-community"
              onPress={() => navigation.toggleDrawer()}
            />
          }
        />
      )
    })
  },
  initialRouteName: "Home"
});

const Drawer = createDrawerNavigator({
  Caisse: {
    screen: CaisseNavigation
  },
  Settings: {
    screen: SettingsNavigation
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
