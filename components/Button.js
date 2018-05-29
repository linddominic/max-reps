import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import {H1, P} from 'components/Text';
import Colors from '../constants/Colors';

export default class Button extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[
          styles.component,
          {}
        ]}>
          <P color="black" style={styles.label}>{this.props.children}</P>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  label: {
    textAlign: 'center',
    // fontSize: 60
  }
})