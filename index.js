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

console.log(li);
console.log(li2);

