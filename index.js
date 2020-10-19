//Exercici 1
//Mostra els literals en format ES6
let moviePoster='img/poster.jpg';
let movieTitle='Inglorious Basterds';

var li =
 '<li>' +
'<div class="row">' +
'<div class="col-md-4">' +
'<img src="' + moviePoster + '" height="250" alt="" />' +
'</div>' +
'<div class="col-md-8">' +
'<h2>' + movieTitle + '</h2>' +
'</div>' +
'</div>' +
'</li>';


let li2 = 
`<li>
    <div class="row">
        <div class="col-md-4">
            <img src="${moviePoster}" height="250" alt="" />
        </div>
        <div class="col-md-8">'
            <h2>${movieTitle}</h2>
        </div>
    </div>
</li>`;



//Exercici 2
//Converteix a funcions fletxa:

//1
function multiply(num1, num2) {
   return num1 * num2;
}

let multiply2 = (num1, num2) =>  num1*num2;

//2
function toCelsius(fahrenheit) {
   return (5/9) * (fahrenheit-32);
}

let toCelsius2 = fahrenheit => {
    return (5/9)*(fahrenheit-32);
};

//3
function padZeros(num, totalLen) {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
}

let padZeros2 = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
};

//4
function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
}

let power2 = (base, exponent) =>{
    let result=1; 
    for (let i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
};

//5 
function greet(who) {
    console.log("Hello " + who);
}

let greet2 = who => console.log(`Hello ${who}`);

//Exercici 3
//Arregla l'error del següent bloc de codi:

// users.map(function (user) {
//    user.firstName;
// });
 
// var users = 
// [{ firstName: 'Homer', lastName: 'Simpson' },
// { firstName: 'Marge', lastName: 'Simpson' },
// { firstName: 'Bart', lastName: 'Simpson' },
// { firstName: 'Lisa', lastName: 'Simpson' },
// { firstName: 'Maggie', lastName: 'Simpson' }];

let users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

users.map(function (user) {
    return user.firstName;
});

// Exercici 4
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
// var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Resultat per consola: 'a long time ago in a galaxy far far away'
// Nota: no fa falta fer un "join".

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let reduced = epic.reduce(acc=(phrase, word)=>{
    phrase+=` ${word}`;
    return phrase;
});

console.log(reduced);