import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "mobx-react";
import RootNavigation from "./navigation/RootNavigation";
import "./utils/animations";
import stores from "./stores";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      console.log("render app");
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Provider {...stores}>
            <RootNavigation />
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "colfax-light": require("./assets/fonts/Colfax-Light.ttf"),
        "colfax-regular": require("./assets/fonts/Colfax-Regular.ttf"),
        "colfax-medium": require("./assets/fonts/Colfax-Medium.ttf"),
        "colfax-bold": require("./assets/fonts/Colfax-Bold.ttf"),
        "colfax-black": require("./assets/fonts/Colfax-Black.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
    console.log(error);
  };

  _handleFinishLoading = () => {
    console.log("hej");
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
