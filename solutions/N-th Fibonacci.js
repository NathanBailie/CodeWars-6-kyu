// https://www.codewars.com/kata/522551eee9abb932420004a0

function nthFibo(n) {
    let f = [0, 1];
    for (let i = 2; i < n; i++) f.push(f[i - 1] + f[i - 2]);
    return f[n - 1];
}