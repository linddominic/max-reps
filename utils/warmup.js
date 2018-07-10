import getPlates from "utils/getPlates";

export default function(max) {
  return [0.4, 0.5, 0.6].map((percentage, index) => {
    return {
      repetitions: 12 - index * 4,
      weight: max * 0.9 * percentage,
      plates: getPlates(max * 0.9 * percentage)
    };
  });
}
