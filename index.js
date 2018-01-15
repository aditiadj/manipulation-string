/*Level 0*/
console.log('---------LEVEL 0------------')

const quoteA = `To win big, you sometimes have to take big risks.`
const quoteB = `- Bill Gates -`

console.log(quoteA)
console.log(quoteB)

function getText() {
  var text = "Result get text :" + "  " + document.getElementById('input-one').value;
  console.log(text);
  document.getElementById('result').innerHTML = text;
}

document.getElementById('result-one').addEventListener('click', getText);

/*Level 1*/
console.log('---------LEVEL 1------------')

const A = `Jangan`
const B = `lupa`
const C = `Jum'atan ya!`
const D = `${A} ${B} ${C}`

console.log(D);

function textCombine() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textcom = `Result text combine : ` +
    textone + `  ` + textwo;
  console.log(textcom);
  document.getElementById('result').innerHTML = textcom;
}

document.getElementById('result-two').addEventListener('click', textCombine);

/*Level 2*/
console.log(`---------LEVEL 2------------`)

D.toUpperCase() //complete sentence to upper
console.log(D.toUpperCase())
D.toLowerCase()
console.log(D.toLowerCase())

function uppercase() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textuc = "result toUpperCase :  " + textone.toUpperCase() + " " + textwo.toUpperCase();
  document.getElementById('result').innerHTML = textuc;
}

document.getElementById('result-three').addEventListener('click', uppercase);

// NOTE:  lowercase text
function lowercase() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textuc = "result toLowerCase :  " + textone.toLowerCase() + " " + textwo.toLowerCase();
  document.getElementById('result').innerHTML = textuc;
}

document.getElementById('result-four').addEventListener('click', lowercase);

/*Level 3*/
console.log(`---------LEVEL 3------------`)

function titleCase(str) {
  str = str.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

console.log(titleCase(`AdItIa DaRmADi jIWaNdoNO`))

function textCapital() {
  var textone = document.getElementById('input-one').value;
  // NOTE: text change to lowercase
  textone = textone.toLowerCase();

  // NOTE: text split into array of strings
  textone = textone.split(' ');

  console.log(textone);

  // NOTE: looping get charAt index 0 change to uppercase
  for (var i = 0; i < textone.length; i++) {
    textone[i] = textone[i].charAt(0).toUpperCase() + textone[i].slice(1);
    console.log(textone);
  }

  document.getElementById('result').innerHTML = "result text capital:  " + textone.join(' ');
}

document.getElementById('result-five').addEventListener('click', textCapital);
console.log(textone);