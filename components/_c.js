import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import {P} from 'components/Text';
import Colors from '../constants/Colors';

export default class Component extends React.PureComponent {
  render() {
    return (
      <View style={styles.component}>
        <P>COMPONENT</P>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1
  }
})