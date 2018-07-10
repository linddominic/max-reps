import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { P, H3 } from "components/ui/Text";

const PADDING_TOP = 45;

export default class WorkoutHeader extends React.PureComponent {
  state = {
    done: false
  };

  _dismissDialog() {
    // dismiss dialog
  }
  _onCancel() {
    this.props.onCancel();
  }
  _onCloseClick() {
    Alert.alert(
      "Cancel Workout",
      "Are you sure you want to cancel this workout?",
      [
        {
          text: "No",
          onPress: () => this._dismissDialog(),
          style: "cancel"
        },
        { text: "Yes", onPress: () => this._onCancel() }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.component}>
        <Ionicons
          name="md-close"
          color="white"
          onPress={() => this._onCloseClick()}
          style={styles.backIcon}
        />
        <P weight="bold" color="white">
          {this.props.title}
        </P>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    paddingTop: PADDING_TOP,
    padding: 15,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  backIcon: {
    fontSize: 30,
    position: "absolute",
    left: 20,
    top: PADDING_TOP - 4
  }
});
