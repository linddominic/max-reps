import React from 'react';

import { 
  Text,
  StyleSheet
} from 'react-native';


import * as Animatable from 'react-native-animatable';

const BASE_FONT_SIZE = 16;

const em = (modifier = 1) => {
  return BASE_FONT_SIZE * modifier;
};

const DEFAULT_OBJECT = {};

export const P = (props) => (
  <Text
    style={[
      styles.all,
      styles.p,
      { color: props.color || null },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);

export const H1 = (props) => (
  <Text
    style={[
      styles.all,
      styles.headings,
      styles.h1,
      { color: props.color || null },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);

export const H2 = (props) => (
  <Text
    style={[
      styles.all,
      styles.headings,
      styles.h2,
      { color: props.color || null },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);
export const H3 = (props) => (
  <Text
    style={[
      styles.all,
      styles.headings,
      styles.h3,
      { color: props.color || null },
      props.style || DEFAULT_OBJECT
    ]}
  >
    {props.children}
  </Text>
);



const styles = StyleSheet.create({
  all: {
    fontFamily: 'colfax-medium'
  },
  p: {
    fontSize: em(1),
    lineHeight: em(1.5), 
  },
  headings: {
    fontFamily: 'colfax-bold',
  },
  h1: {
    fontSize: em(2.2)
  },
  h2: {
    fontSize: em(2)
  },
  h3: {
    fontSize: em(1.8)
  },
  
});

