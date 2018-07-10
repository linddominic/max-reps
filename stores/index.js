import ExercisesStore from "./ExercisesStore";
import ExerciseStore from "./ExerciseStore";
import WorkoutStore from "./WorkoutStore";

export default {
  exercises: new ExercisesStore(),
  exercise: new ExerciseStore(),
  workout: new WorkoutStore()
};
