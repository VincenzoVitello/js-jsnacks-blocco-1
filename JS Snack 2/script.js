/*
  Fai inserire un numero, che chiameremo N, all’utente.
  Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
  Ogni volta che ne crei uno, stampalo a schermo.
*/

const numero = parseInt(prompt('inserisci un numero'));

for(let index=0; index<numero; index++){

        const emptyNumberBox = [];
        for(let i=0; i<10; i++){

            emptyNumberBox.push(Math.floor(Math.random()*100+1));

        }
        console.log(emptyNumberBox);

}