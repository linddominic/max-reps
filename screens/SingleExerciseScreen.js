import React from 'react';
import { 
  View,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native';

import { EvilIcons, Ionicons, Feather } from '@expo/vector-icons';

import {H1, H2, P} from 'components/Text';
import ListItem from 'components/ListItem';
import ActionSheet from 'components/ActionSheet';
import Header from 'components/Header';
import MaxListItem from 'components/MaxListItem';
import Colors from '../constants/Colors';

import max from 'utils/max';

export default class SingleExercise extends React.Component {
  static navigationOptions = {
    title: 'Single exercise',
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      sheet: false,
      formula: 'epley'
    }
  }

  render() {
    const { exercise, max } = this.props.navigation.state.params;

    return (
      <Header
        subtitle="Your best"
        title={exercise.name}
        inverted
        bg="black"
        onLeft={() => this.props.navigation.goBack()}
        leftIcon="arrow-left"
        onRight={() => this.props.navigation.push('Register', {exercise})}
        rightIcon="plus"
      >
        
        <View>

          <View style={{padding: 15}}>
            <H1 color="white" style={styles.max}>{max.max}<H1 color="rgba(255,255,255,.3)" style={styles.max}>kg</H1></H1>
          </View>

          {max.others.map((max, index) => (
            <MaxListItem
              key={index}
              label={`${100 - ((index+1) * 10)}%`}
              max={`${max}kg`}
            />
          ))}
        </View>
        
        <StatusBar
          animated
          barStyle="light-content"
        />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'black',
  },
  max: {
    fontSize: 100,
    marginBottom: 20
  }
});
