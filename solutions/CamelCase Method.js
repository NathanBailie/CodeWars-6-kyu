// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase = function () {
    return this.split(' ').map(w => w.replace(/^./, c => c.toUpperCase())).join('');
}