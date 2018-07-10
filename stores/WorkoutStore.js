import { observable, observableMap, action, computed } from "mobx";

import toArray from "utils/toArray";
import db from "utils/db";
import fto from "utils/531";

import getMainLift from "utils/getMainLift";

import exercises from "utils/exercises";

export default class WorkoutStore {
  @observable name = "";
  @observable exercises = [];
  performed = observable.map({});

  @action
  startWorkout(workout) {
    console.log("start workout");
    console.log(workout);

    this.exercises = workout.exercises
      // get exercises based on id map
      .map(id => exercises.filter(exercise => exercise.id == id)[0])
      // add main sets to main lift
      .map(exercise => {
        if (exercise.main) {
          return {
            ...exercise,
            ...getMainLift()
          };
        } else {
          return exercise;
        }
      });

    console.log(this.exercises);
  }

  @action
  toggleExercise(exercise, setIndex, type) {
    if (!this.performed[exercise.id]) {
      if (exercise.main) {
        this.performed.set(exercise.id, { warmup: {}, sets: {} });
      } else {
        this.performed.set(exercise.id, {});
      }
    }

    console.log(this.performed);

    if (exercise.main) {
      this.performed.get(exercise.id);
      this.performed.get(exercise.id)[type][setIndex] = !this.performed.get(
        exercise.id
      )[type][setIndex];
    } else {
      this.performed[exercise.id][setIndex] = !this.performed[exercise.id][
        setIndex
      ];
    }
  }

  @action
  isExercisePerformed(exercise, setIndex, type) {
    console.log("is exercise perfomed");
    if (this.perfomed && this.performed[exercise.id]) {
      if (exercise.main) {
        return this.performed[exercise.id][type][setIndex];
      } else {
        return this.performed[exercise.id][setIndex];
      }
    } else {
      return false;
    }
  }

  @computed
  get progress() {
    console.log(this.performed);

    return Math.random();
  }

  getProgressForExercise(exercise) {
    console.log("get progress");
    let progress = 0;
    let amountOfExercises = 0;

    amountOfExercises =
      typeof exercise.sets == "object" ? exercise.sets.length : exercise.sets;

    if (exercise.main) {
      amountOfExercises += exercise.warmup.length;
    }

    console.log(this.performed);
    if (this.performed && this.performed[exercise.id]) {
      let current = [];
      if (exercise.main) {
        current.push([...this.performed[exercise.id].warmup]);
        current.push([...this.performed[exercise.id].sets]);
      }
      console.log(current);
    } else {
      return progress;
    }
  }

  // @action
  // getById(id) {
  //   db.ref(`/exercises/${id}`).on("value", snap => {
  //     console.log("new exercise update");
  //     const exercise = snap.val() || {};
  //     this.exercise = exercise;
  //   });
  // }

  // @action
  // getByIdOff(id) {
  //   db.ref(`/exercises/${id}`).off();
  // }

  // @action
  // registerLift(toAdd) {
  //   return db.ref(`/exercises/${toAdd.id}/reps`).push({
  //     reps: toAdd.reps,
  //     weight: toAdd.weight
  //   });
  // }
}
