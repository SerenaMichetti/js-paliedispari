/**
 * @param {sting} word parola data dall'utente
 * @returns {string} parola rigirata
 */
//dichiaro un funzione che riceve in input una stringa da rigirare

function reverseString(word) {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word.charAt(i);
        result += element
    }
    return result;
}

//dichiaro una funzione che riceve in input la stringa rigirata

/**
 * @param {string} originalWord parola rigirata
 * @return {boolean} true se la parola è palindroma, false altrimenti
*/
function isPalindroma(originalWord){
    let reverseWord = reverseString(originalWord)
    return originalWord.toLowerCase() === reverseWord.toLowerCase();
}

//chiedo all'utente di inserire una parola

let userWord = prompt('Inserisci una parola')

//invoco la funzione 

let palindroma = isPalindroma(userWord)

if (palindroma) {
    alert(`"${userWord}" è PALINDROMA!`);
} else {
    alert(`"${userWord}" NON è palindroma. Riprova!`);
}
