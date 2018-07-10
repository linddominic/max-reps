import React from "react";
import { Text, StyleSheet } from "react-native";

const BASE_FONT_SIZE = 16;

const FONT_WEIGHTS = {
  light: "colfax-light",
  regular: "colfax-regular",
  medium: "colfax-medium",
  bold: "colfax-bold",
  black: "colfax-black"
};

const DEFAULT_WEIGHT = "colfax-medium";

const em = (modifier = 1) => {
  return BASE_FONT_SIZE * modifier;
};

const weight = weight => {
  if (!weight) {
    return DEFAULT_WEIGHT;
  } else {
    return FONT_WEIGHTS[weight] || DEFAULT_WEIGHT;
  }
};

const DEFAULT_OBJECT = {};

export const P = props => (
  <Text
    style={[
      styles.all,
      styles.p,
      {
        color: props.color || null,
        marginBottom: props.margin ? em(1) : 0,
        fontFamily: weight(props.weight)
      },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);

export const H1 = props => (
  <Text
    style={[
      styles.all,
      styles.headings,
      styles.h1,
      {
        color: props.color || null,
        marginBottom: props.margin ? em(1) : 0
      },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);

export const H2 = props => (
  <Text
    style={[
      styles.all,
      styles.headings,
      styles.h2,
      {
        color: props.color || null,
        marginBottom: props.margin ? em(1) : 0
      },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);
export const H3 = props => (
  <Text
    style={[
      styles.all,
      styles.headings,
      styles.h3,
      {
        color: props.color || null,
        marginBottom: props.margin ? em(1) : 0
      },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  all: {
    fontFamily: DEFAULT_WEIGHT
  },
  p: {
    fontSize: em(1),
    lineHeight: em(1.5)
  },
  headings: {
    fontFamily: "colfax-bold"
  },
  h1: {
    fontSize: em(2.2)
  },
  h2: {
    fontSize: em(1.8)
  },
  h3: {
    fontSize: em(1.5)
  }
});
