//http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(pizza){
    let chilli = pizza[0].length;
    pizza.forEach(piece => piece.length < chilli ? chilli = piece.length : null);  
    let cutPizza = pizza.map(piece => piece.slice(0,chilli));
    return cutPizza;
}
//http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(chempion, last) {
  let member = 0;
  if (chempion.includes(last)) {
    member = chempion.lastIndexOf(last) - chempion.indexOf(last);
    return member;
  } else return -1;
}

//http://www.codewars.com/kata/57280481e8118511f7000ffa"
function splitAndMerge(sea, river) {
  const water = sea.split(" ");
  for (let i = 0; i < water.length; i++) {
    const h20 = water[i].split("");
    water[i] = h20.join(river);
  }
  const result = water.join(" ");
  return result;
}
