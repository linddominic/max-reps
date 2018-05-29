import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {P,H2} from 'components/Text';
import Colors from '../constants/Colors';

export default class MaxListItem extends React.PureComponent {
  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={() => console.log('in')}
        onPressOut={() => console.log('out')}
      >
        <View style={styles.component}>
          <H2 color="white">{this.props.label}</H2>
          <H2 color="white">{this.props.max}</H2>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 0,
  }
})