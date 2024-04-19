// https://www.codewars.com/kata/58acf6c20b3b251d6d00002d

function rocks(n) {
    let cost = 0, length = 1, amount = 9;
    while (n > amount) {
        cost += length * amount;
        n -= amount;
        length++;
        amount *= 10;
    }

    return cost + length * n;
}