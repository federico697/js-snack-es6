// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra 
// queste posizioni 2 e 4

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let arr2 = [];

// -2 promt
let min = parseInt( prompt('dammi in numero min') );
let max = parseInt( prompt('dammi in numero max') );

// funzione con min e max parametri
// function estrazioneNomi(min, max){

//     myArray.forEach( ( elemento, index ) => {

//         if ( index >= min && index <= max ) {
//             arr2.push(elemento);
//         }
//     } );
// }

// invoco la funzione
// estrazioneNomi(min, max);

// console.log(arr2)

// versione con il filter

function estrazioneNomi(min, max){

    arr2 = myArray.filter( ( elemento, index ) => {
        if ( index >= min && index <= max ){
            return true;
        }
    });

    arr2.forEach( (elemento) => {
        console.log(elemento)
    } ) 
}

estrazioneNomi(min, max);
console.log(arr2)
