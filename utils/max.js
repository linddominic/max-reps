import oneRepMax from 'one-rep-max';

import { get } from 'utils/store';

export default ({weight = 100, reps = 10}) => {

  get('settings').then(res => {
    console.log(res);
  })

  console.log(weight ,reps);
  
  const max = oneRepMax.epley({weight: weight > 0 ? weight : 1,reps});
  const exercise = {
    max: Math.floor(max),
    others: [
      Math.floor(max * 0.9),
      Math.floor(max * 0.8),
      Math.floor(max * 0.7),
      Math.floor(max * 0.6),
      Math.floor(max * 0.5),
      Math.floor(max * 0.4),
      Math.floor(max * 0.3),
      Math.floor(max * 0.2),
      Math.floor(max * 0.1)
    ]
  };

  return exercise;
}