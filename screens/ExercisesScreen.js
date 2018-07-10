import React from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";

import { Pages } from "react-native-pages";
import { inject, observer } from "mobx-react";

import Colors from "../constants/Colors";

import ExerciseCard from "components/exercises/ExerciseCard";
import MyIndicator from "components/exercises/MyIndicator";
import getMaxForExercise from "utils/getMaxForExercise";

@inject("exercises")
@observer
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

  componentWillMount() {
    this.props.exercises.getAll();
  }
  componentWillUnmount() {
    this.props.exercises.getAllOff();
  }
  componentDidMount() {}

  render() {
    const { exercises } = this.props.exercises;

    return !this.state.loaded ? null : (
      <View style={styles.container}>
        <Pages renderPager={this.renderPager.bind(this)}>
          {exercises.map((exercise, index) => (
            <View style={styles.swipeCard} key={index}>
              <ExerciseCard
                key={index}
                onPress={() =>
                  this.props.navigation.push("SingleExercise", {
                    id: exercise.id,
                    max: getMaxForExercise(exercise)
                  })
                }
                name={exercise.name}
                max={getMaxForExercise(exercise)}
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
    paddingBottom: 20,
    backgroundColor: "white"
  },
  swipeCard: {
    flex: 1,
    justifyContent: "center"
  }
});
