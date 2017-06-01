import { reduce, maxBy } from 'lodash';

export const ph0 = {
  paddingLeft: [0],
  paddingRight: [0],
}

export const pv0 = {
  paddingTop: [0],
  paddingBottom: [0],
}

export const p0 = {
  ...ph0,
  ...pv0,
}

export const mh0 = {
  paddingLeft: [0],
  paddingRight: [0],
}

export const mv0 = {
  paddingTop: [0],
  paddingBottom: [0],
}

export const m0 = {
  ...mh0,
  ...mv0,
}

export function majorityVote(styles, key) {
  const values = reduce(styles, (res, style) => {
    const value = style[key];
    res[value] = (res[value] || 0) + 1;
  }, {});

  return maxBy(Object.keys(values), value =>  values[value])
}


// export function majorityVote(styles, key) {
//   const stylesWithCounts = reduce(styles, (res, style) => {
//     const key = JSON.stringify(style);
//     if(!res[key]) {
//       res[key] = { count: 0, style };
//     }
//     res[key].count++;
//   }, {});

//   const mostPopular = maxBy(stylesWithCounts, obj => obj.count);
//   return mostPopular.style;
// }