import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Constants } from "expo";
import { inject, observer } from "mobx-react";

import { P, H1, H2, H3 } from "components/ui/Text";
import Header from "components/ui/Header";
import Button from "components/ui/Button";
import ListItem from "components/ui/ListItem";
import ListHeader from "components/ui/ListHeader";
import Colors from "../constants/Colors";

import getWeeksWorkouts from "utils/getWeeksWorkouts";

export default class Screen extends React.Component {
  static navigationOptions = {
    title: "Weeks",
    header: null
  };

  state = {
    index: 0
  };

  _handlePress(day) {
    const { navigation } = this.props;
    navigation.push("Workout", { ...day });
  }
  render() {
    const week = getWeeksWorkouts();
    return (
      <View
        style={{
          flex: 1,
          padding: 15,
          paddingTop: 50,
          backgroundColor: "white"
        }}
      >
        {week.map(day => (
          <ListItem
            onPress={() => this._handlePress(day)}
            color={day.today ? "black" : "grey"}
            labelRight={day.workout.type}
            label={day.today ? "Today" : day.name}
          />
        ))}
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
