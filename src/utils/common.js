const hasEqualProp = (item1, prop) => item2 => {
  return item1[prop] === item2[prop];
};

export const getRandomPositive = max => Math.floor(Math.random() * (max + 1));

export const getRandomItem = ({ all = [], exclude = [], prop = 'id' }) => {
  const randomItem = all.filter(item =>
    exclude.filter(hasEqualProp(item, prop))
  )[getRandomPositive(all.length)];

  return randomItem;
};

export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const newPos = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    // eslint-disable-next-line no-param-reassign
    arr[i] = arr[newPos];
    // eslint-disable-next-line no-param-reassign
    arr[newPos] = temp;
  }
  return arr;
};
