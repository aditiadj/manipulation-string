/*Level 0*/
console.log('---------LEVEL 0------------');

const quoteA = `To win big, you sometimes have to take big risks.`;
const quoteB = `- Bill Gates -`;

console.log(quoteA);
console.log(quoteB);

/*Level 1*/
console.log('---------LEVEL 1------------');

const A = "Jangan"
const B = "lupa"
const C = "Jum'atan ya!"
const D = `${A} ${B} ${C}`

console.log(D);
/*Level 2*/
console.log('---------LEVEL 2------------');

D.toUpperCase(); //complete sentence to upper
console.log(D.toUpperCase());
D.toLowerCase();
console.log(D.toLowerCase());

/*Level 3*/
console.log('---------LEVEL 3------------');

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

console.log(titleCase("AdItIa DaRmADi jIWaNdoNO"));