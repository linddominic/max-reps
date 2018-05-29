import React from 'react';
import { 
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import {p} from 'components/Text';
import Colors from '../constants/Colors';

export default class Screen extends React.Component {
  static navigationOptions = {
    title: 'Screen',
  };

  render() {
    return (
      <View style={styles.container}>
        <p>Screen</p>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
