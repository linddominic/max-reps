export default function(object = {}) {
  return Object.keys(object).map(key => {
    return {
      id: key,
      ...object[key]
    };
  });
}
