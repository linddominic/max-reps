import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

import { H1, P } from "./Text";

const DEFAULT_OBJ = {};

export default class Button extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight
        style={[
          styles.borderRadius,
          this.props.pill ? styles.pill : DEFAULT_OBJ
        ]}
        onPress={this.props.onPress}
      >
        <View
          style={[
            styles.component,
            styles.borderRadius,
            this.props.pill ? styles.pill : DEFAULT_OBJ,
            { backgroundColor: this.props.bg || "white" }
          ]}
        >
          <P color={this.props.color || "black"} style={styles.label}>
            {this.props.children}
          </P>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    overflow: "hidden"
  },
  borderRadius: {
    borderRadius: 2
  },
  pill: {
    borderRadius: 9999
  },
  label: {
    textAlign: "center"
    // fontSize: 60
  }
});
