export default (mapAsync = (list, iterator) =>
  new Promise((resolve, reject) => {
    let index = 0;
    const result = [];
    const iterate = next => iterator(list[index], next, index);
    const next = value => {
      result.push(value);
      index += 1;
      return index === list.length ? resolve(result) : iterate(next);
    };
    try {
      iterate(next);
    } catch (e) {
      reject(e);
    }
  }));
