import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Constants } from "expo";
import { inject, observer } from "mobx-react";

import { P, H1, H2, H3 } from "components/ui/Text";
import Header from "components/ui/Header";
import Button from "components/ui/Button";
import ListItem from "components/ui/ListItem";
import ListHeader from "components/ui/ListHeader";
import Colors from "../constants/Colors";

export default class Screen extends React.Component {
  static navigationOptions = {
    title: "Kitchen",
    header: null
  };

  state = {
    index: 0,
    color: "white",
    listItemToggle: false
  };

  render() {
    const { listItemToggle, color: COLOR } = this.state;
    return (
      <Header
        subtitle="Week 1"
        title="Lower 1"
        inverted
        bg="black"
        onLeft={() => console.log("black")}
        leftIcon="arrow-left"
      >
        <View style={{ padding: 15 }}>
          <H1 color={COLOR} margin>
            H1: Expo OTA does not work
          </H1>

          <H2 color={COLOR} margin>
            H2: Expo OTA does not work
          </H2>

          <H3 color={COLOR} margin>
            H3: Expo OTA does not work
          </H3>

          <P color={COLOR} margin>
            P: Hey Expo team! Our company is having issues with OTA.
          </P>

          <View style={{ alignItems: "center" }}>
            <Button onPress={() => console.log("hey")}>Regular button</Button>
            <Button bg="black" color={COLOR} onPress={() => console.log("hey")}>
              Custom button
            </Button>
            <Button bg="pink" color="yellow" onPress={() => console.log("hey")}>
              Crazy customized button
            </Button>
            <Button pill onPress={() => console.log("hey")}>
              Pill button
            </Button>
          </View>

          <ListItem color={COLOR} label="List item plain" />
          <ListItem color={COLOR} label="List item" />

          <ListHeader color="white" label="Warmup sets" subtitle="lift more" />
          <ListItem
            color={COLOR}
            label="List item"
            labelRight="100"
            subtitle="With a subtitle"
          />
          <ListItem
            color={COLOR}
            label="List item"
            subtitle="With a subtitle and an icon"
            icon="ios-arrow-down"
          />
          <ListItem
            bg="black"
            color="white"
            label="List item"
            subtitle="With a subtitle and an icon and background"
            icon="ios-arrow-down"
          />
          <ListItem
            onPress={() =>
              this.setState({ listItemToggle: !this.state.listItemToggle })
            }
            color={COLOR}
            label="5 x 65kg"
            subtitle="20kg x 1, 2.5kg x 1"
            icon={listItemToggle ? "" : "ios-checkmark-circle"}
          />
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  }
});
