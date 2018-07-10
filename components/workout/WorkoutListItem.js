import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { P, H3 } from "components/ui/Text";

export default class WorkoutListItem extends React.PureComponent {
  state = {
    done: false
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ done: !this.state.done })}
      >
        <View style={styles.component}>
          <P>
            {this.props.label} x {this.props.weight}kg{"  "}
            <P style={{ opacity: 0.3 }}>{this.props.plates}</P>
          </P>

          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              style={{ opacity: this.state.done ? 1 : 0 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: "rgba(255,255,255,.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
