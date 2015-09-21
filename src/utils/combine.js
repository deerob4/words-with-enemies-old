function combine(object, ...arrays) {
  return object[0].map((obj, index) => {
    let items = arrays.map(arr => ({
      [arr[1]]: arr[0][index]
    }));

    return Object.assign({}, { [object[1]]: obj }, ...items);
  });
}

export default combine;
