/*1. Dare la possibilità di inserire due parole.*/

let firstWord= parseInt(prompt('Insert a word'));

let secondWord= parseInt(prompt('Insert a word'));


/**
 * Function that checks which one between the two words is the longest
 * @param {*} firstWord first word that the user inserts by a prompt
 * @param {*} secondWord second word that the user inserts by a prompt
 * @returns true if the words have the same length, false is they have it differently
 */


/*Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.*/
function areTheyEqual(firstWord, secondWord){

    /*Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/
    if(firstWord.length===secondWord.length){
        return true;
    } else if(firstWord.length===secondWord.length){
        return false;
    }
}

if(areTheyEqual(firstWord, secondWord)){
    console.log('they are equal');
}
else if(firstWord.length < secondWord.length){
    console.log('The second one is the longest');
}
else if(firstWord.length > secondWord.length){
    console.log('The first one is the longest');
}
