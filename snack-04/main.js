// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno 
// tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: 
// Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let teams = [
    { nome: 'PSG', punti_fatti: 0, punti_subiti: 0 },
    { nome: 'Ajax', punti_fatti: 0, punti_subiti: 0 },
    { nome: 'Roma', punti_fatti: 0, punti_subiti: 0 },
    { nome: 'Real Madrid', punti_fatti: 0, punti_subiti: 0 }
];



function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

const teamsCopia = teams.map( ({nome, punti_fatti, punti_subiti}) => {

    let punti_fatti = getRandomInt(1, 100);
    let punti_subiti = getRandomInt(1, 100);

    return {punti_fatti, punti_subiti, nome}

} );

console.log(teamsCopia)