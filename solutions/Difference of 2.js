// https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(arr) {
    let set = new Set(arr), res = [];
    arr.sort((a, b) => a - b);
    arr.forEach(n => set.has(n + 2) && res.push([n, n + 2]));
    return res;
}