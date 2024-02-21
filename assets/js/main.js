//console.log('it works');

const elementUl = document.querySelector('ul');

//-Scrivere un programma utilizzando il ciclo for per prendere i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //-li stampo in console
    //console.log(i);


    if (i % 3 === 0 && i % 5 === 0) {
        //-SE la mia variabile i/5 AND i/3 scrivo FizzBuzz
        console.log('fizzbuz');
        //elementUl.innerHTML = '<li>fizzbuzz</li>'
    } else if (i % 3 === 0) {
        //ALTRIMENTI SE la mia variabile i/3 scrivo Fizz
        console.log('fizz');
        //elementUl.innerHTML += '<li>fizz</li>'
        
    } else if (i % 5 === 0) {
        //-ALTRIMENTI SE la mia variabile i/5 scrivo Buzz
        console.log('buzz');
       // elementUl.innerHTML += '<li>buzz</li>'
    } else {
        console.log(i);
        //elementUl.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }

};