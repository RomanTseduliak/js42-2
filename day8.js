//http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n){
  if (n > Number.MAX_VALUE) return 'Input number is Number.POSITIVE_INFINITY';
  if (n < Number.MIN_VALUE) return 'Input number is Number.NEGATIVE_INFINITY';
  if (n === Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE';
  if (n === Number.MIN_VALUE) return 'Input number is Number.MIN_VALUE';
  if (isNaN(n)) return 'Input number is Number.NaN';
  if (n || n == 0) return `Input number is ${n}`;
}
//https://www.codewars.com/kata/57238ceaef9008adc7000603

// http://www.codewars.com/kata/57256064856584bc47000611
