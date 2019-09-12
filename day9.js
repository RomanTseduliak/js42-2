//http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(pizza){
    let chilli = pizza[0].length;
    pizza.forEach(piece => piece.length < chilli ? chilli = piece.length : null);  
    let cutPizza = pizza.map(piece => piece.slice(0,chilli));
    return cutPizza;
}
//http://www.codewars.com/kata/57277a31e5e51450a4000010

//http://www.codewars.com/kata/57280481e8118511f7000ffa"
