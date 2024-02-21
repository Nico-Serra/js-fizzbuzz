//console.log('it works');

//const elementUl = document.querySelector('ul');

const container = document.querySelector('.container');
const h1 = document.createElement('h1');
container.append(h1);
h1.append('FizzBuzzDOM')
h1.className = 'text-align'
const ul = document.createElement('ul');
container.append(ul);
ul.className = 'd-flex';




//-Scrivere un programma utilizzando il ciclo for per prendere i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //-li stampo in console
    //console.log(i);


    if (i % 3 === 0 && i % 5 === 0) {
        //-SE la mia variabile i/5 AND i/3 scrivo FizzBuzz
        //console.log('fizzbuz');
        //elementUl.innerHTML = '<li>fizzbuzz</li>'
        const li = document.createElement('li')
        ul.append(li)
        li.append('fizzbuzz')
        li.className = 'box box_fizzbuzz'
    } else if (i % 3 === 0) {
        //ALTRIMENTI SE la mia variabile i/3 scrivo Fizz
        //console.log('fizz');
        //elementUl.innerHTML += '<li>fizz</li>'
        const li = document.createElement('li')
        ul.append(li)
        li.append('fizz')
        li.className = 'box box_fizz'
        
    } else if (i % 5 === 0) {
        //-ALTRIMENTI SE la mia variabile i/5 scrivo Buzz
        //console.log('buzz');
       //elementUl.innerHTML += '<li>buzz</li>'
       const li = document.createElement('li')
        ul.append(li)
        li.append('buzz')
        li.className = 'box box_buzz'

    } else {
        //console.log(i);
        //elementUl.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
        const li = document.createElement('li')
        ul.append(li)
        li.append(`${i}`)
        li.className = 'box'
    }

};