// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(arr) {
    let even = [], odd = [];
    arr.forEach((x, i) => x % 2 === 0 ? even.push(x) : odd.push(x));
    return even.length === 1 ? even[0] : odd[0];
}