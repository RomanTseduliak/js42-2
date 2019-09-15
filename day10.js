//http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  let biger = str.toUpperCase();
  let leters = biger.split(" ");
  for (let i = 0; i < leters.length; i++) {
  leters[i] = leters[i].slice(0, -1) + leters[i][leters[i].length - 1].toLowerCase();
  }
  return leters.join(" ");
}


//http://www.codewars.com/kata/57284d23e81185ae6200162a

//http://www.codewars.com/kata/5729b103dd8bac11a900119e
