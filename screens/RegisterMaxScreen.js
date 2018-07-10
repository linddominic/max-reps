import React from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";

import { inject, observer } from "mobx-react";
import Colors from "../constants/Colors";

import ExerciseInput from "components/exercise/ExerciseInput";

@inject("exercise")
@observer
export default class RegisterMax extends React.Component {
  static navigationOptions = {
    header: null
  };

  _save(input) {
    const { id } = this.props.navigation.state.params;
    const { weight = 100, reps = 100 } = input;
    this.props.exercise
      .registerLift({
        id,
        weight: Number(weight),
        reps: Number(reps)
      })
      .then(res => {
        this.props.navigation.goBack();
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <ExerciseInput onSave={input => this._save(input)} />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "black"
  }
});
