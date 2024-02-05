
const sum = (fromN, toN) => {
  // Sum all the values from fromN up to toN
  if (fromN === toN) return fromN; // base case

  return fromN + sum(fromN + 1, toN); // recursive case


};

module.exports = sum;
