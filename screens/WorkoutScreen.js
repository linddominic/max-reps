import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Constants } from "expo";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";

import { Pages } from "react-native-pages";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

import { P, H1, H2, H3 } from "components/ui/Text";
import ListItem from "components/ui/ListItem";
import Colors from "../constants/Colors";
import ListHeader from "components/ui/ListHeader";
import Header from "components/ui/Header";
import WorkoutHeader from "components/workout/WorkoutHeader";

import getMainLift from "utils/getMainLift";

const { width, height } = Dimensions.get("window");

@inject("workout")
@observer
export default class Screen extends React.Component {
  static navigationOptions = {
    title: "Workout",
    gesturesEnabled: false
  };

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    const { params } = navigation.state;
    const { workout, newWorkout } = params;

    this.state = {
      index: 0,
      exercises: {}
    };
  }

  _platesString(plates) {
    return plates
      .map(plate => ` ${plate.plateWeight}kg x ${plate.qty}`)
      .join()
      .slice(1);
  }

  componentDidMount() {
    const { navigation, workout: WorkoutStore } = this.props;
    const { params } = navigation.state;
    const { workout, newWorkout } = params;

    WorkoutStore.startWorkout(newWorkout);
  }

  _toggleExercise(exercise, setIndex, type) {
    const { navigation, workout: WorkoutStore } = this.props;

    WorkoutStore.toggleExercise(exercise, setIndex, type);
  }
  render() {
    const { navigation, workout: WorkoutStore } = this.props;
    const { params } = navigation.state;
    const { workout } = params;
    const main = getMainLift(workout.type);
    const { exercises, performed, name } = WorkoutStore;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <WorkoutHeader
          title={workout.name.toUpperCase()}
          onCancel={() => {
            this.props.navigation.pop();
          }}
        />
        <Pages indicatorColor="black">
          {exercises.map((exercise, index) => (
            <View style={{ flex: 1 }} key={index.toString() + "heya"}>
              <ScrollView
                contentContainerStyle={{ padding: 15, paddingTop: 20 }}
              >
                <H3 style={styles.header} color="black">
                  {exercise.name} {Object.keys(performed).length}
                </H3>

                {!exercise.main ? (
                  [...Array(exercise.sets).fill("")].map((set, index) => (
                    <ListItem
                      margin
                      key={index.toString() + "heyo"}
                      onPress={() => this._toggleExercise(exercise, index)}
                      bg={
                        WorkoutStore.isExercisePerformed(exercise, index)
                          ? "green"
                          : "rgba(0,0,0,.04)"
                      }
                      color={"black"}
                      label={`Lift ${exercise.reps} times`}
                    />
                  ))
                ) : (
                  <React.Fragment>
                    <ListHeader color="grey" label="Warmup" />
                    {exercise.warmup.map((set, index) => (
                      <ListItem
                        key={index.toString() + "warmp"}
                        margin
                        onPress={() =>
                          this._toggleExercise(exercise, index, "warmup")
                        }
                        bg="rgba(0,0,0,.04)"
                        color={"black"}
                        label={`${set.repetitions} x ${
                          set.plates.closestWeight
                        }kg`}
                        subtitle={this._platesString(set.plates.plates)}
                      />
                    ))}
                    <ListHeader color="black" label="Working Sets" />
                    {exercise.sets.map((set, index) => (
                      <ListItem
                        key={index.toString() + "argh"}
                        margin
                        onPress={() =>
                          this._toggleExercise(exercise, index, "sets")
                        }
                        bg="rgba(0,0,0,.04)"
                        color={"black"}
                        label={`${set.repetitions} x ${set.closestWeight}kg`}
                        subtitle={this._platesString(set.plates)}
                      />
                    ))}
                  </React.Fragment>
                )}
              </ScrollView>
            </View>
          ))}
        </Pages>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#fff"
  },
  header: {
    marginBottom: 10,
    marginTop: 0
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  }
});
