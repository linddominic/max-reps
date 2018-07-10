const daysOriginal = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
import {
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday
} from "date-fns";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const workoutTypes = [
  "bench-press",
  "run",
  "squat",
  "run",
  "military-press",
  "run",
  "deadlift"
];

import { workouts, newWorkouts } from "utils/workouts";

const getWorkout = type => {
  return workouts.filter(workout => workout.type == type)[0];
};
const getNewWorkout = type => {
  return newWorkouts.filter(workout => workout.type == type)[0];
};

export default () => {
  const dt = new Date();
  const today = daysOriginal[dt.getDay()];
  const week = days.map((item, index) => ({
    name: days[index],
    today: days[index] == today,
    workout: getWorkout(workoutTypes[index]),
    newWorkout: getNewWorkout(workoutTypes[index])
  }));

  return week;
};
