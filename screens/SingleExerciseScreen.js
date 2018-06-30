import React from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { inject, observer } from "mobx-react";
import { EvilIcons, Ionicons, Feather } from "@expo/vector-icons";

import { H1, H2, H3, P } from "components/Text";
import ListItem from "components/ListItem";
import ActionSheet from "components/ActionSheet";
import Button from "components/Button";
import Header from "components/Header";
import MaxListItem from "components/MaxListItem";
import Colors from "../constants/Colors";

import getMaxForExercise from "utils/getMaxForExercise";
import max from "utils/max";
import fto from "utils/531";

@inject("exercise")
@observer
export default class SingleExercise extends React.Component {
  static navigationOptions = {
    title: "Single exercise",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      sheet: false,
      formula: "epley",
      view: "max" // 531
    };
  }

  componentWillMount() {
    const { id } = this.props.navigation.state.params;

    this.props.exercise.getById(id);
  }

  componentWillUnmount() {
    this.props.exercise.getByIdOff();
  }

  render() {
    const { id } = this.props.navigation.state.params;
    const { exercise } = this.props.exercise;
    console.log(exercise);

    if (exercise) {
      const max = getMaxForExercise(exercise);

      const workout = fto(max.max);

      return (
        <Header
          subtitle="Your best"
          title={exercise.name}
          inverted
          bg="black"
          onLeft={() => this.props.navigation.goBack()}
          leftIcon="arrow-left"
          onRight={() => this.props.navigation.push("Register", { id })}
          rightIcon="plus"
        >
          <View style={{ paddingBottom: 30 }}>
            <View style={{ paddingHorizontal: 15 }}>
              <H1 color="white" style={styles.max}>
                {max.max}
                <H1 color="rgba(255,255,255,.3)" style={styles.max}>
                  kg
                </H1>
              </H1>
            </View>

            <View style={styles.buttons}>
              <Button onPress={() => this.setState({ view: "max" })}>
                Maxes
              </Button>
              <Button onPress={() => this.setState({ view: "531" })}>
                Lift
              </Button>
            </View>

            {this.state.view == "531" && (
              <View>
                <View style={styles.week}>
                  <P color="grey">Warmup</P>
                  {workout.warmup.map(set => (
                    <P color="white">
                      {set.repetitions} * {Math.floor(set.weight)}kg
                    </P>
                  ))}
                </View>
                {workout.cycle.map((week, i) => (
                  <View style={styles.week}>
                    <P color="grey">Week {i + 1}</P>
                    {week.map(set => (
                      <P color="white">
                        {set.repetitions} * {Math.floor(set.weight)}kg{" "}
                        {set.plates.map(type => (
                          <P color="grey">
                            {" "}
                            {type.plateWeight}kg * {type.qty},
                          </P>
                        ))}
                      </P>
                    ))}
                  </View>
                ))}
              </View>
            )}

            {this.state.view == "max" && (
              <View>
                {max.others.map((max, index) => (
                  <MaxListItem
                    key={index}
                    label={`${100 - (index + 1) * 10}%`}
                    max={`${max}kg`}
                  />
                ))}
              </View>
            )}
          </View>

          <StatusBar animated barStyle="light-content" />
        </Header>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 40,
    backgroundColor: "black"
  },
  max: {
    fontSize: 100,
    marginBottom: 20
  },
  buttons: {
    flexDirection: "row",
    padding: 15
  },
  week: {
    backgroundColor: "rgba(255,255,255,.07)",
    padding: 15,
    margin: 15,
    borderRadius: 5
  }
});
