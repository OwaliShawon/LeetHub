/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let finalResult = [];
  const maxCandies = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    let newCandies = candies[i] + extraCandies;
      if (newCandies >= maxCandies) {
      finalResult.push(true);
    } else {
      finalResult.push(false);
    }
  }

  return finalResult;
};
