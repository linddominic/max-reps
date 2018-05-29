import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  fadeUpSlow : {
    0: {
      opacity: 0,
      translateY: 30,
    },
    1: {
      opacity: 1,
      translateY: 0,
    },
  }
});