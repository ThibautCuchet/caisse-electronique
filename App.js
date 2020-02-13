import React, { Component } from "react";
import { createAppContainer, withNavigation } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./pages/Home";
import { Provider, connect } from "react-redux";
import store from "./storages/store";
import Pay from "./pages/Pay";
import Settings from "./pages/Settings";
import { COLORS_APP } from "./styles/colors";
import { Button, Icon } from "react-native-elements";
import {
  updateConnectionState,
  loadProductStorage,
  loadReductionStorage
} from "./actions";
import { database } from "./storages/database";
import { AsyncStorage } from "react-native";
import CaisseSettings from "./pages/Settings/caisse";

const CaisseNavigation = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Pay: {
      screen: Pay,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const SettingsNavigation = createStackNavigator(
  {
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
    CaisseSettings: {
      screen: CaisseSettings
    }
  },
  {
    initialRouteName: "Home"
  }
);

const Drawer = createDrawerNavigator(
  {
    Caisse: {
      screen: CaisseNavigation,
      navigationOptions: {
        drawerIcon: <Icon name="store" color="white" />
      }
    },
    Settings: {
      screen: SettingsNavigation,
      navigationOptions: {
        drawerIcon: <Icon name="settings" color="white" />
      }
    }
  },
  {
    drawerBackgroundColor: COLORS_APP.PRIMARY_COLOR,
    contentOptions: {
      labelStyle: {
        color: "white"
      }
    }
  }
);

const Routes = createAppContainer(Drawer);

class App extends Component {
  componentDidMount() {
    database
      .ref(".info/connected")
      .on("value", value =>
        this.props.updateConnectionState(
          value,
          this.props.storage.currentPaying
        )
      );
  }

  _retrievStorage = async () => {
    try {
      const products = await AsyncStorage.getItem("PRODUCTS");
      const reductions = await AsyncStorage.getItem("REDUCTIONS");
      if (products) loadProductStorage(JSON.parse(products));
      if (reductions) loadReductionStorage(JSON.parse(reductions));
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return <Routes />;
  }
}

const mapStateToProps = ({ storage }) => {
  return {
    storage
  };
};

const mapReducerToProps = {
  updateConnectionState,
  loadProductStorage,
  loadReductionStorage
};

const ConnectedApp = connect(mapStateToProps, mapReducerToProps)(App);

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};

export default AppWithStore;
