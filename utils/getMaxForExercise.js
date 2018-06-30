import max from "utils/max";
import toArray from "utils/toArray";

export default function(exercise) {
  const { reps: repsObject } = exercise;
  const reps = toArray(repsObject);
  const last = reps[reps.length - 1];

  if (reps.length) {
    return max({
      weight: last.weight,
      reps: last.reps
    });
  } else {
    return {
      max: 0,
      others: []
    };
  }
}
