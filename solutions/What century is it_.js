// https://www.codewars.com/kata/52fb87703c1351ebd200081f

function whatCentury(year) {
    const century = Math.ceil(year / 100);
    const suffix = century === 11 || century === 12 || century === 13 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th';
    return `${century}${suffix}`;
}