function replicate(str, quantity) {
  let list = [];

  for (let i = 0; i < quantity; i++) {
    list.push(str);
  }

  return list;
}

export default replicate;
