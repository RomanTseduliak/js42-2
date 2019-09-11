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
function colorOf(r, g, b) {
  let r1 = r.toString(16);
  let g1 = g.toString(16);
  let b1 = b.toString(16);
  if (r1.length < 2) {
    r1 = "0" + r1;
  }
  if (g1.length < 2) {
    g1 = "0" + g1;
  }
  if (b1.length < 2) {
    b1 = "0" + b1;
  }
  return "#" + r1 + g1 + b1;
}

// http://www.codewars.com/kata/57256064856584bc47000611
