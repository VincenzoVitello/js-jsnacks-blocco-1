/*
  Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
  Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
  la somma degli elementi è minore di 50.
*/

const emptyNumberBox = []; //definito array vuoto
let sum = 0; //definita in una variabile la somma dei vari numeri
let counter = 0; //definito un contatore, che verrà incrementato a ogni giro di while


do{ //creato un ciclo Do-While, che chiederà all'utente di inserire un numero, che verrà pushato all'interno dell'array vuota e, in seguito, unito al valore di sum
   let number = parseInt(prompt('Inserisci un numero')); 
    emptyNumberBox.push(number);
    sum += emptyNumberBox[counter];
    counter++;
}while(sum<50);

console.log(emptyNumberBox);
console.log(sum);
