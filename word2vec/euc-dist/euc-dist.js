/*
  +---------------+
  |   Euc-Dist    |
  |   word2vec    |
  +---------------+
    \_ By EthanThatOneKid
*/

const euclideanDistance = (vec1, vec2) => {
  if (vec1.length != vec2.length) return undefined;
  const sum = vec1.reduce((acc, cur1, i) => {
    const cur2 = vec2[i];
    acc += Math.pow(cur1 - cur2, 2);
    return acc;
  }, 0);
  return Math.sqrt(sum);
};

const addVectors = (vec1, vec2) => {
  if (vec1.length != vec2.length) return undefined;
  const result = vec1.reduce((acc, cur1, i) => {
    const cur2 = vec2[i];
    acc.push(cur1 + cur2);
    return acc;
  }, []);
  return result;
};
