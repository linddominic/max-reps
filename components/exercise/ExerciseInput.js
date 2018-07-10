import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView
} from "react-native";
import * as Animatable from "react-native-animatable";

const InputAccessoryView = require("InputAccessoryView");

import { P, H2, H3 } from "components/ui/Text";
import Steps from "./Steps";
import StepNavigation from "./StepNavigation";

export default class ExerciseInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      weight: "",
      reps: ""
    };
  }

  _renderContent() {
    const { step } = this.props;
  }
  render() {
    const inputAccessoryViewID = "uniqueID";

    return (
      <Animatable.View style={styles.component}>
        <Animatable.View animation="fadeUpSlow">
          <Steps
            steps={["Weight", "Reps"]}
            current={this.state.index}
            onPress={index => this.setState({ index })}
          />
        </Animatable.View>
        {this.state.index == 0 ? (
          <Animatable.View style={styles.content}>
            <Animatable.View animation="fadeUpSlow" delay={100} duration={800}>
              <H3 color="white">How much did you lift?</H3>
            </Animatable.View>
            <Animatable.View delay={300} animation="fadeUpSlow" duration={800}>
              <TextInput
                keyboardType="numeric"
                // autoFocus
                enablesReturnKeyAutomatically
                inputAccessoryViewID={inputAccessoryViewID}
                placeholderTextColor="rgba(255,255,255,.3)"
                placeholder="150"
                style={styles.input}
                value={this.state.weight}
                onChangeText={weight => this.setState({ weight })}
              />
            </Animatable.View>
          </Animatable.View>
        ) : null}

        {this.state.index == 1 ? (
          <Animatable.View
            animation="fadeIn"
            duration={1200}
            style={styles.content}
          >
            <Animatable.View animation="fadeUpSlow" delay={100} duration={800}>
              <H3 color="white">How many reps?</H3>
            </Animatable.View>
            <Animatable.View delay={300} animation="fadeUpSlow" duration={800}>
              <TextInput
                keyboardType="numeric"
                inputAccessoryViewID={inputAccessoryViewID}
                // autoFocus
                placeholder="10"
                placeholderTextColor="rgba(255,255,255,.3)"
                style={styles.input}
                value={this.state.reps}
                onChangeText={reps => this.setState({ reps })}
              />
            </Animatable.View>
          </Animatable.View>
        ) : null}

        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <StepNavigation
            current={this.state.index}
            steps={["Weight", "Reps"]}
            onNext={index => this.setState({ index: this.state.index + 1 })}
            onPrev={index => this.setState({ index: this.state.index - 1 })}
            onSave={() =>
              this.props.onSave({
                weight: this.state.weight,
                reps: this.state.reps
              })
            }
          />
        </InputAccessoryView>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 80,
    paddingHorizontal: 15
    // justifyContent: 'center'
  },
  input: {
    fontSize: 120,
    fontFamily: "colfax-bold",
    color: "white"
    // backgroundColor:15 'rgba(255,255,255,.1)'
  },
  content: {}
});
