import React from 'react';
import {
  View,
  StyleSheet,
  Animated
} from 'react-native';

import {P} from 'components/Text';
import Colors from '../constants/Colors';

export default class Component extends React.PureComponent {
  render() {
    let {
      pages,
      progress,
      indicatorColor: backgroundColor,
      indicatorOpacity,
      indicatorPosition,
      style,
      ...props
    } = this.props;

    let dots = Array.from(new Array(pages), (page, index) => {
      let opacity = progress
        .interpolate({
          inputRange: [
            -Infinity,
            index - 1,
            index,
            index + 1,
            Infinity,
          ],
          outputRange: [
            0.2,
            0.2,
            1.0,
            0.2,
            0.2,
          ],
        });
        
        let height = progress
        .interpolate({
          inputRange: [
            -Infinity,
            index - 1,
            index,
            index + 1,
            Infinity,
          ],
          outputRange: [
            2,
            2,
            10,
            2,
            2,
          ],
        });

      let style = { opacity, height };

      return (
        <Animated.View style={[styles.dot, style]} key={index}></Animated.View>
      );
    });

    return (
      <View style={[styles.container, style]} {...props}>
        {dots}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  dot: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    margin: 4
  },
});