let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

// creiamo un array con il nome degli studenti in maiuscolo
let arrUppercase = students.map( (Element) => {

    return Element.name.toUpperCase();

} );

console.log(arrUppercase)

// creiamo un array con solo gli studenti con grado maggiore di 70
let arrGrades1 = students.filter( Element => Element.grades > 70 );
console.log(arrGrades1)

// creiamo un array con solo gli studenti con grado maggiore di 70 e id maggiore di 120
let arrGrades2 = students.filter( Element => Element.grades > 70 && Element.id > 120 );
console.log(arrGrades2)
