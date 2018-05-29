import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {P} from 'components/Text';
import Colors from '../constants/Colors';

export default class Steps extends React.PureComponent {
  render() {
    const { steps, current } = this.props;
    console.log(steps);

    console.log(current);
    return (
      <View style={styles.component}>
        {steps.map((step, index) => (
          <TouchableOpacity
            key={index}
            style={styles.step}
            onPress={() => this.props.onPress(index)}
          >
            <P 
              color="white"
              style={[
                styles.stepText,
                index == current ? styles.active : {}
              ]}>
                {step.toUpperCase()}
            </P>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
  },
  step: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingRight: 20
  },
  stepText: {
    fontFamily: 'colfax-medium',
    opacity: .7
  },
  active: {
    opacity: 1
  }
})