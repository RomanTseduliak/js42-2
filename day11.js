\\https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.figure === s2.figure);
  for (let body of s1) {
    if (s1.has(body) !== s2.has(body)) {
      return false;
    }
  }
  return true;
}
function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

