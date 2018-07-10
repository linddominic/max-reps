import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import * as Animatable from "react-native-animatable";

import { H1, P } from "components/ui/Text";

export default class ExerciseCard extends React.PureComponent {
  render() {
    console.log(this.props.max);

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <Animatable.View
          animation="fadeUpSlow"
          style={[styles.component, this.props.expanded ? styles.expanded : {}]}
        >
          <P color="white" style={styles.subtitle}>
            {this.props.name}
          </P>
          <H1 color="white" style={styles.title}>
            {this.props.max.max}
            <H1 color="rgba(255,255,255,.3)" style={styles.title}>
              kg
            </H1>
          </H1>
          <View style={styles.label}>
            <P color="white">CURRENT MAX</P>
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    margin: 15
  },
  expanded: {
    flex: 1
  },
  title: {
    textAlign: "center",
    fontSize: 80
  },
  subtitle: {
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 30
  },
  label: {
    backgroundColor: "rgba(255,255,255,.15)",
    paddingVertical: 7,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 30
  }
});
