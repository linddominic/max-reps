import { AsyncStorage } from "react-native";

// exercise model
const exercise = {
  name: "Bench",
  reps: [
    {
      weight: 100,
      reps: 10
    }
  ]
};

const exercises = [exercise, exercise, exercise];

export const get = key => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(res => {
      const result = res ? JSON.parse(res) : false;
      resolve(result);
    });
  });
};

export const save = (key, value) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, JSON.stringify(value)).then(res => {
      resolve(JSON.parse(res));
    });
  });
};

export const registerLift = ({ name, weight, reps }) => {
  return new Promise((resolve, reject) => {
    get("exercises").then(exercises => {
      let newExercises = exercises || [];

      if (exercises.length) {
        newExercises = newExercises.map(e => {
          if (e.name == name) {
            e.reps.push({ weight, reps });
          }
          return e;
        });
      } else {
        newExercises.push({
          name,
          reps: [{ weight, reps }]
        });
      }
      save("exercises", newExercises).then(res => {
        resolve(res);
      });
    });
  });
};
