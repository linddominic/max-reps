import plateCalculator from "utils/plateCalculator";

const PLATES = [25, 20, 15, 10, 5, 2.5, 2, 1.25, 1];

export default function(weight) {
  return plateCalculator.calculate(weight, {
    set: PLATES,
    barbellWeight: 20
  });
}
