import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {P} from 'components/Text';
import Colors from '../constants/Colors';

export default class StepNavigation extends React.PureComponent {
  render() {
    const { current, steps } = this.props;

    return (
      <View style={styles.component}>
  
        <TouchableOpacity
          disabled={current == 0}
          onPress={() => this.props.onPrev()}
        >
          <P 
            color="white"
            style={styles.button}
          >
              PREV
          </P>
        </TouchableOpacity>


        {current >= 0 && current < steps.length - 1? (
        <TouchableOpacity
          onPress={() => this.props.onNext()}
        >
          <P 
            color="white"
            style={styles.button}
          >
              NEXT
          </P>
        </TouchableOpacity>
        ) : null}
        
        {current == steps.length-1 ? (
        <TouchableOpacity
          onPress={() => this.props.onSave()}
        >
          <P 
            color="white"
            style={styles.button}
          >
              SAVE
          </P>
        </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 15,
    width: Dimensions.get('window').width,
    paddingHorizontal: 0
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'colfax-medium',
    paddingHorizontal: 15,
    paddingVertical: 15
  }
})