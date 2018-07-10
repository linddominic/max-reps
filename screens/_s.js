import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Constants } from "expo";
import { inject, observer } from "mobx-react";

import { P, H1, H2, H3 } from "components/ui/Text";
import Colors from "../constants/Colors";

@inject("workout")
@observer
export default class Screen extends React.Component {
  static navigationOptions = {
    title: "Screen",
    header: null
  };

  state = {
    index: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <H3>Namn på Pass</H3>
        <P>Kör fan</P>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  }
});
