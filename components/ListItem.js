import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {P,H3} from 'components/Text';
import Colors from '../constants/Colors';

export default class ListItem extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={styles.component}>
          <P color="white">{this.props.label}</P>

          <Ionicons name="ios-arrow-down" size={24} color="white" />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})