import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { P, H3 } from "components/ui/Text";

export default class ListItem extends React.PureComponent {
  render() {
    const WrapperComponent = this.props.onPress ? TouchableOpacity : View;

    return (
      <WrapperComponent onPress={() => this.props.onPress()}>
        <View
          style={[
            styles.component,
            {
              paddingHorizontal: this.props.bg ? 15 : 0,
              backgroundColor: this.props.bg || "transparent",
              marginBottom: this.props.margin ? 15 : 0
            }
          ]}
        >
          <View>
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

          <View>
            {this.props.labelRight ? (
              <P color={this.props.color || "white"}>{this.props.labelRight}</P>
            ) : (
              <Ionicons
                name={this.props.icon}
                size={this.props.iconSize || 24}
                color={this.props.color || "white"}
              />
            )}
          </View>
        </View>
      </WrapperComponent>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    borderRadius: 5,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subtitle: {
    opacity: 0.75
  }
});
