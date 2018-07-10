import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { EvilIcons, Ionicons, Feather } from "@expo/vector-icons";

import { P } from "components/ui/Text";
import Header from "components/ui/Header";
import ListItem from "components/ui/ListItem";
import ActionSheet from "components/settings/ActionSheet";
import Colors from "../constants/Colors";

const VALUES = {
  epley: "Epley",
  brzycki: "Brzycki",
  lander: "Lander",
  lombardi: "Lombardi",
  mayhew: "Mayhew et al.",
  oconner: "O`Conner et al.",
  wathan: "Wathan"
};

export default class Screen extends React.Component {
  static navigationOptions = {
    title: "Screen",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      sheet: false,
      formula: "epley"
    };
  }

  render() {
    return (
      <Header
        subtitle="Make it yours."
        title="Settings"
        inverted
        bg="black"
        onLeft={() => console.log("black")}
        leftIcon="arrow-left"
        actionSheet={() => (
          <ActionSheet
            show={this.state.sheet}
            dismiss={() => this.setState({ sheet: false })}
            onChange={this.onChange}
            value={this.state.formula}
            values={VALUES}
            onSelect={formula => this.setState({ formula })}
          />
        )}
      >
        <View style={{ padding: 15 }}>
          <P margin color="white">
            Select your method of 1RM calculation:
          </P>
          <ListItem
            onPress={() => this.setState({ sheet: true })}
            label={VALUES[this.state.formula]}
            bg="rgba(255,255,255,.1)"
            icon="ios-more"
          />
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "black"
  }
});
