module.exports = function getZerosCount(number, base) {
  // your implementation
  let ZerosCount = [];
  let b = base;
  const n = number;

  for (let i = 2; i <= b; i++) {
    if (b % i === 0) {
      let dividerCount = 0;
      while (b % i === 0) {
        b /= i;
        dividerCount++;
      }
      let count = 0;
      let z = Math.floor(n / i);
      while (z > 0) {
        count += z;
        z = Math.floor(z / i);
      }
      ZerosCount.push(Math.floor(count / dividerCount));
    }
  }
  return Math.min(...ZerosCount);
};
