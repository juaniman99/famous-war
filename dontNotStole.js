// Please dont share my program. 2019 copyright
// uhmm... okay... MIT license?

let famous = [];

loadFamous();

const killed = famous.splice(getRandomNumberPls(famous.length), 1)[0];
const killedBy = famous[getRandomNumberPls(famous.length)];

const tweetMessage = killedBy + ' se ha cargado a ' + killed;
console.log(tweetMessage);
// Please tweet the output manually pls

1 + 1;

function getRandomNumberPls(number) {
  return Math.floor(Math.random() * number);
}
function loadFamous() {
  famous = ['Ada Colau', 'Alberto Chicote', 'Alex Morgan', 'Willirex', 'Harry Potter', 'Ibai', 'Cecilio G', 'Jordi ENP'];
}
