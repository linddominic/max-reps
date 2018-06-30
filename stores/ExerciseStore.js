import { observable, action, computed } from "mobx";

import toArray from "utils/toArray";
import db from "utils/db";

export default class ExercisesStore {
  @observable exercise = false;

  @action
  getById(id) {
    db.ref(`/exercises/${id}`).on("value", snap => {
      console.log("new exercise update");
      const exercise = snap.val() || {};
      this.exercise = exercise;
    });
  }

  @action
  getByIdOff(id) {
    db.ref(`/exercises/${id}`).off();
  }

  @action
  registerLift(toAdd) {
    return db.ref(`/exercises/${toAdd.id}/reps`).push({
      reps: toAdd.reps,
      weight: toAdd.weight
    });
  }
}
