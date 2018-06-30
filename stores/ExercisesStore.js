import { observable, action, computed } from "mobx";

import toArray from "utils/toArray";
import db from "utils/db";

export default class ExercisesStore {
  @observable exercises = [];

  @action
  getAll() {
    db.ref("/exercises").on("value", snap => {
      const exercises = toArray(snap.val() || {});
      this.exercises = exercises;
    });
  }

  @action
  getAllOff() {
    db.ref("/").off();
  }

  @action
  registerLift(toAdd) {
    return db.ref(`/exercises/${toAdd.id}/reps`).push({
      reps: toAdd.reps,
      weight: toAdd.weight
    });
  }

  @action
  getExerciseById(id) {
    return this.exercises.filter(exercise => exercise.id == id)[0];
  }
}
