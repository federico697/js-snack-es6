// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con 
// le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore 
// utilizzando destructuring e template literal

const bici = [
    { name: 'Pinarello', peso: 10 },
    { name: 'Bianchi', peso: 8 },
    { name: 'Scott', peso: 11 },
];

let biciLeggera = bici[0];

// let {name, peso } = biciLeggera;

for ( let i=0; i < bici.length; i++ ){

    let elementoCorrente = bici[i];
    let { peso } = elementoCorrente;

    if( peso < biciLeggera.peso ){
        biciLeggera = elementoCorrente
    }
}
console.log(biciLeggera)