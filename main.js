/**
 * estrae un numero random compreso tra min e max
 * @param {*} min il numero minimo
 * @param {*} max il numero massimo
 * @returns un numero random compreso tra min e max
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Verifica se la somma di due numeri è pari o dispari
 * @param {number} num1 primo numero da sommare
 * @param {number} num2 secondo numero da sommare
 * @returns {boolean} true se la somma è pari, false altrimenti 
 */
function verifyEvenOrOddSum(num1, num2) {
    let sum = num1 + num2
    let result = ' ';
    if (sum % 2 == 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

// chiedo all'utente se pari o dispari e di tirare un numero da 1 a 5
let bet = prompt('Scegli pari o dispari');
let numero1 = parseInt(prompt('Scegli un numero da 1 a 5'));

// mi calcolo random il numero che tira il computer
let numero2 = getRandomNumber(1, 5)
alert(`Computer ha tirato ${numero2}`)

// verifico se la somma tra i due numeri è pari o dispari
let risultato = verifyEvenOrOddSum(numero1, numero2)
if (risultato == true) {
    alert(`La somma tra ${numero1} e ${numero2} è pari`)
} else {
    alert(`La somma tra ${numero1} e ${numero2} è dispari`)
}

// stabilisco chi ha vinto
if (bet == 'pari' && risultato == true) {
    alert('Hai vinto')
} else if (bet == 'dispari' && risultato == false) {
    alert('Hai vinto')
} else {
    alert('Hai perso')
}



