//console.log('it works');

const elementUl = document.querySelector('ul')

//-Scrivere un programma utilizzando il ciclo for per prendere i numeri da 1 a 100
for (let i=1; i <= 100; i++){
    //console.log(i);
    elementUl.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
}

/*-li stampo in console
    -SE la mia variabile i/3 scrivo Fizz
    -ALTRIMENTI SE la mia variabile i/5 scrivo Buzz
    -ALTRIMENTI SE la mia variabile i/5 AND i/3 scrivo FizzBuzz
*/