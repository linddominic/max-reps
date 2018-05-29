import React from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";

import { Pages } from "react-native-pages";

import Colors from "../constants/Colors";

import { P } from "components/Text";
import ExerciseCard from "components/ExerciseCard";
import MyIndicator from "components/MyIndicator";
import Button from "components/Button";
import ExerciseInput from "components/ExerciseInput";

import max from "utils/max";
import { get } from "utils/store";

export default class ExercisesScreen extends React.Component {
  static navigationOptions = {
    title: "Exercises Screen",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      exercises: []
    };
  }

  renderPager({ pages, progress, indicatorPosition }) {
    if ("none" === indicatorPosition) {
      return null;
    }

    return (
      <MyIndicator
        pages={pages}
        progress={progress}
        position={indicatorPosition}
      />
    );
  }
  componentDidMount() {
    get("exercises").then(exercises => {
      this.setState({ exercises, loaded: true });
    });
  }

  _getExerciseMax(exercise) {
    const { reps } = exercise;
    const last = reps[reps.length - 1];

    if (reps.length) {
      return max({
        weight: last.weight,
        reps: last.reps
      });
    } else {
      return false;
    }
  }
  render() {
    const { exercises = [] } = this.state;

    return !this.state.loaded ? null : (
      <View style={styles.container}>
        <Pages renderPager={this.renderPager.bind(this)}>
          {exercises.map((exercise, index) => (
            <View style={styles.swipeCard} key={index}>
              <ExerciseCard
                key={index}
                onPress={() =>
                  this.props.navigation.push("SingleExercise", {
                    exercise,
                    max: this._getExerciseMax(exercise)
                  })
                }
                name={exercise.name}
                max={this._getExerciseMax(exercise)}
              />
            </View>
          ))}
        </Pages>

        <StatusBar animated barStyle="dark-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "white"
  },
  swipeCard: {
    flex: 1,
    justifyContent: "center"
  }
});
