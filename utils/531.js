import fto from "531";
import warmup from "utils/warmup";
import getPlates from "utils/getPlates";
import { map } from "rsvp";

export default function(max) {
  const cycle = fto(max);
  return {
    warmup: warmup(max),
    cycle: cycle.map(week =>
      week.map(workout => {
        return {
          ...workout,
          ...getPlates(workout.weight)
        };
      })
    )
  };
}
