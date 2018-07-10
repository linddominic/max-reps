import fto from "utils/531";

export default type => {
  return {
    warmup: fto(100).warmup,
    sets: fto(100).cycle[0]
  };
};
