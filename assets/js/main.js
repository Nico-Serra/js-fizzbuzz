//console.log('it works');

const elementUl = document.querySelector('ul')

//-Scrivere un programma utilizzando il ciclo for per prendere i numeri da 1 a 100
for (let i=1; i <= 100; i++){
    //-li stampo in console
    //console.log(i);

    
     if (i % 3 === 0) {
        //SE la mia variabile i/3 scrivo Fizz
        //console.log(i);
        elementUl.innerHTML += '<li>fizz</li>'
     } else if (i % 5 === 0) {
        //console.log(i);
        elementUl.innerHTML += '<li>buzz</li>'
     } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log(i);
        elementUl.innerHTML += '<li>fizzbuzz</li>'
     }

     elementUl.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
    
//-ALTRIMENTI SE la mia variabile i/5 scrivo Buzz
    //-ALTRIMENTI SE la mia variabile i/5 AND i/3 scrivo FizzBuzz

}