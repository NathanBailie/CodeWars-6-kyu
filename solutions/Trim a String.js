// https://www.codewars.com/kata/526e8de0512511429e000006

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};