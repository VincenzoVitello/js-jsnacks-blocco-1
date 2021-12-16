// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numberBox = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < numberBox.length; i++) {
    if(i % 2 == 1) { // index is even
        evenNumbers.push(numberBox[i]);
    }else{
        oddNumbers.push(numberBox[i]);
    }
}
console.log(evenNumbers);
console.log(oddNumbers);

document.getElementById("green").innerHTML = "Numeri pari: " + evenNumbers;
document.getElementById("red").innerHTML = "Numeri dispari: " + oddNumbers;



