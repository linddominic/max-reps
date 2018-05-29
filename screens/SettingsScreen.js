import React from 'react';
import { 
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import { EvilIcons, Ionicons, Feather } from '@expo/vector-icons';

import {P} from 'components/Text';
import ListItem from 'components/ListItem';
import ActionSheet from 'components/ActionSheet';
import Header from 'components/Header';
import Colors from '../constants/Colors';

export default class Screen extends React.Component {
  static navigationOptions = {
    title: 'Screen',
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      sheet: true,
      formula: 'epley'
    }
  }

  render() {
    return (
      <Header
        subtitle="Make it yours."
        title="Settings"
        inverted
        bg="black"
        onLeft={() => console.log('black')}
        leftIcon="arrow-left"
        actionSheet={() => (
          <ActionSheet
            show={this.state.sheet}
            dismiss={() => this.setState({sheet: false})}
            onChange={this.onChange}
            value={this.state.formula}
            onSelect={formula => this.setState({formula})}
          >
          </ActionSheet>
        )}
      >
        <View style={{padding: 15}}>
          <P style={{marginBottom: 10}} color="white">Select your method of 1RM calculation:</P>
          <ListItem
            onPress={() => this.setState({sheet: true})}
            label="Bryzki"
          />
        </View>
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
});
