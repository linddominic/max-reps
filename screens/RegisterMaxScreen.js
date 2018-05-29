import React from 'react';
import { 
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Colors from '../constants/Colors';

import {P} from 'components/Text';
import ExerciseCard from 'components/ExerciseCard';
import ExerciseInput from 'components/ExerciseInput';

import {registerLift} from 'utils/store';

export default class RegisterMax extends React.Component {
  static navigationOptions = {
    header: null
  };

  _save(input) {
    const { exercise } = this.props.navigation.state.params;
    const { weight = 100, reps = 100 } = input;
    registerLift({name: exercise.name, weight: Number(weight), reps: Number(reps)}).then(res => {
      this.props.navigation.goBack();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ExerciseInput 
          onSave={(input) => this._save(input)}
        />
        <StatusBar
          barStyle="light-content"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'black',
  },
});
