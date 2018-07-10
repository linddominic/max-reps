import React from "react";
import { View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { P } from "components/ui/Text";

export default class ListHeader extends React.PureComponent {
  render() {
    return (
      <View
        style={[
          styles.component,
          {
            paddingHorizontal: this.props.bg ? 15 : 0,
            backgroundColor: this.props.bg || "transparent"
          }
        ]}
      >
        <P color={this.props.color || "white"}>{this.props.label}</P>
        {this.props.subtitle && (
          <P
            weight="regular"
            style={styles.subtitle}
            color={this.props.color || "white"}
          >
            {this.props.subtitle}
          </P>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderBottomWidth: 0,
    borderBottomColor: "silver",
    opacity: 0.4
  },
  subtitle: {
    opacity: 0.75
  }
});
