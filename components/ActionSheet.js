import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import {P} from 'components/Text';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const VALUES = {
  epley: 'Epley',
  brzycki: 'Brzycki',
  lander: 'Lander',
  lombardi: 'Lombardi',
  mayhew: 'Mayhew et al.',
  oconner: 'O`Conner et al.',
  wathan: 'Wathan'
};

const ActionSheetListItem = (props) => (
  <TouchableOpacity onPress={() => props.onPress(props.label)}>
    <View style={styles.listItem}>
      <P>{props.label}</P>
      <Feather name="check" size={20} color="black" />
    </View>
  </TouchableOpacity>
);

export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contentX : new Animated.Value(0)
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.show !== this.props.show){
      Animated.spring(this.state.contentX, {
        toValue: this.props.show ? 1 : 0,
        useNativeDriver: true,
        overshootClamping: true
      }).start();
    }
  }
  componentDidMount(){
    Animated.spring(this.state.contentX, {
      toValue: this.props.show ? 1 : 0,
      useNativeDriver: true,
      overshootClamping: true
    }).start();
  }
  render() {
    const wrapperY = this.state.contentX.interpolate({
      inputRange: [0,0.2, 1],
      outputRange: [height, 0, 0]
    });
    const contentY = this.state.contentX.interpolate({
      inputRange: [0,0.1,1],
      outputRange: [height/3, height/3, 0]
    });

    const opacityDimmer = this.state.contentX.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 0, 1]
    });

    return (
      <Animated.View style={[
        styles.component,
        { transform: [{ translateY: wrapperY }] }
      ]}>

        <TouchableWithoutFeedback onPress={() => this.props.dismiss()}>
          <Animated.View style={[
            styles.dimmer,
            StyleSheet.absoluteFill,
            { opacity: opacityDimmer }
          ]}>
          </Animated.View>
        </TouchableWithoutFeedback>

        <Animated.View style={[
          styles.content,
          { transform: [{ translateY: contentY }] }
        ]}>
          <ScrollView>
            {Object.keys(VALUES).map(key => (
              <ActionSheetListItem
                key={key}
                label={VALUES[key]}
                selected={this.props.value == key}
                onPress={item => {
                  this.props.onSelect(key)
                  this.props.dismiss();
                }}
              />
            ))}
          </ScrollView>
        </Animated.View>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    position: 'absolute',
    height: '100%',
    width,
    zIndex: 100,
  },
  active: {
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    maxHeight: height/3
  },
  dimmer: {
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  listItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItemIcon: {
    color: 'black'
  }
})